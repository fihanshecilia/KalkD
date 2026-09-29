import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import { allAndroidFiles } from '../src/android_code/index.js';

async function main() {
  const zip = new JSZip();

  // Root project files for standard Android Studio structure
  zip.file(
    'build.gradle.kts',
    `// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    id("com.android.application") version "8.2.2" apply false
    id("org.jetbrains.kotlin.android") version "1.9.22" apply false
    id("org.jetbrains.kotlin.kapt") version "1.9.22" apply false
}
`
  );

  zip.file(
    'settings.gradle.kts',
    `pluginManagement {
    repositories {
        google {
            content {
                includeGroupByRegex("com\\\\.android.*")
                includeGroupByRegex("com\\\\.google.*")
                includeGroupByRegex("androidx.*")
            }
        }
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}

rootProject.name = "KalkD"
include(":app")
`
  );

  zip.file(
    'gradle.properties',
    `org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
android.useAndroidX=true
android.enableJetifier=true
kotlin.code.style=official
`
  );

  zip.file(
    'gradle/wrapper/gradle-wrapper.properties',
    `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.2-bin.zip
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`
  );

  zip.file(
    'app/proguard-rules.pro',
    `# Add project specific ProGuard rules here.
-keep class com.fihan.kalkd.api.** { *; }
-keepclassmembers class * {
    @com.google.gson.annotations.SerializedName <fields>;
}
`
  );

  zip.file(
    'README.md',
    `# KalkD - Android Kotlin Project

Aplikasi Android "KalkD" berbasis Kotlin dengan arsitektur MVVM, Room Database (CRUD permanen), Retrofit 2 + Gson, SharedPreferences Session Manager, dan BottomNavigationView 5 menu.

## Kompatibilitas Perangkat
- Min SDK: 24 (Android 7.0 ke atas, mencakup smartphone dan tablet)
- Target SDK: 34 (Android 14)
- Kompatibel penuh untuk instalasi di HP (Smartphone) maupun Tablet Android.

## Cara Menjalankan di Android Studio:
1. Ekstrak file ZIP ini ke folder pilihan Anda.
2. Buka Android Studio (versi Hedgehog, Iguana, Jellyfish, Ladybug, atau terbaru).
3. Pilih menu "Open" lalu pilih folder hasil ekstrak "KalkD".
4. Tunggu proses "Gradle Sync" selesai sampai dependensi terunduh sempurna.
5. Hubungkan HP atau Tablet Android menggunakan kabel USB (aktifkan USB Debugging di Opsi Pengembang HP) atau gunakan Android Virtual Device (Emulator).
6. Klik tombol "Run 'app'" (ikon segitiga hijau) untuk meng-compile dan meng-install aplikasi langsung ke HP/tablet Anda.
`
  );

  // Add all files from code definitions
  allAndroidFiles.forEach((file) => {
    zip.file(file.path, file.content);
  });

  const content = await zip.generateAsync({ type: 'nodebuffer' });

  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, 'KalkD_Android_Project.zip');
  fs.writeFileSync(outputPath, content);
  console.log('Successfully created KalkD_Android_Project.zip at ' + outputPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
