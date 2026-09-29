export interface AndroidFile {
  path: string;
  name: string;
  language: 'kotlin' | 'xml' | 'gradle' | 'json';
  category: 'Gradle & Manifest' | 'Resources & Layouts' | 'Kotlin Classes';
  description: string;
  content: string;
}

export const gradleAndManifestFiles: AndroidFile[] = [
  {
    path: 'app/build.gradle.kts',
    name: 'build.gradle.kts',
    language: 'gradle',
    category: 'Gradle & Manifest',
    description: 'Konfigurasi Gradle module app dengan Room, Retrofit, KAPT, ViewBinding',
    content: `plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.kapt")
}

android {
    namespace = "com.fihan.kalkd"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.fihan.kalkd"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }

    buildFeatures {
        viewBinding = true
    }
}

dependencies {
    // Core & UI Support
    implementation("androidx.core:core-ktx:1.13.1")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("com.google.android.material:material:1.12.0")
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")

    // Navigation & Fragment
    implementation("androidx.navigation:navigation-fragment-ktx:2.7.7")
    implementation("androidx.navigation:navigation-ui-ktx:2.7.7")
    implementation("androidx.fragment:fragment-ktx:1.8.1")

    // Room Database
    val roomVersion = "2.6.1"
    implementation("androidx.room:room-runtime:$roomVersion")
    implementation("androidx.room:room-ktx:$roomVersion")
    kapt("androidx.room:room-compiler:$roomVersion")

    // Retrofit & Gson
    val retrofitVersion = "2.11.0"
    implementation("com.squareup.retrofit2:retrofit:$retrofitVersion")
    implementation("com.squareup.retrofit2:converter-gson:$retrofitVersion")
    implementation("com.google.code.gson:gson:2.10.1")
    implementation("com.squareup.okhttp3:logging-interceptor:4.12.0")

    // Coroutines
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.8.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.8.0")

    // Lifecycle & ViewModel
    implementation("androidx.lifecycle:lifecycle-viewmodel-ktx:2.8.2")
    implementation("androidx.lifecycle:lifecycle-livedata-ktx:2.8.2")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.8.2")

    // CircleImageView
    implementation("de.hdodenhof:circleimageview:3.1.0")

    // Testing
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
}`
  },
  {
    path: 'app/src/main/AndroidManifest.xml',
    name: 'AndroidManifest.xml',
    language: 'xml',
    category: 'Gradle & Manifest',
    description: 'Manifest aplikasi dengan izin Internet dan deklarasi Activities',
    content: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <!-- Izin Akses Jaringan Internet untuk Retrofit -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    
    <!-- Izin Membaca Media untuk Android 13 ke bawah -->
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"
        android:maxSdkVersion="32" />
    <!-- Izin Membaca Gambar untuk Android 13 (API 33+) -->
    <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />

    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_logo_kalkd"
        android:label="@string/app_name"
        android:roundIcon="@drawable/ic_logo_kalkd"
        android:supportsRtl="true"
        android:theme="@style/Theme.KalkD"
        android:usesCleartextTraffic="true"
        tools:targetApi="34">

        <!-- Splash Activity sebagai Launcher utama -->
        <activity
            android:name=".SplashActivity"
            android:exported="true"
            android:theme="@style/Theme.KalkD.Splash">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <!-- Login Activity -->
        <activity
            android:name=".LoginActivity"
            android:exported="false"
            android:windowSoftInputMode="adjustResize" />

        <!-- Main Activity dengan Bottom Navigation -->
        <activity
            android:name=".MainActivity"
            android:exported="false" />

    </application>

</manifest>`
  }
];
