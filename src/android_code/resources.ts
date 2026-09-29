import { AndroidFile } from './gradleAndManifest';

export const resourceFiles: AndroidFile[] = [
  {
    path: 'app/src/main/res/values/strings.xml',
    name: 'strings.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'String resources aplikasi KalkD',
    content: `<resources>
    <string name="app_name">KalkD</string>
    <string name="title_home">Home</string>
    <string name="title_kalkulator">Kalkulator</string>
    <string name="title_data">Data</string>
    <string name="title_web_api">Web API</string>
    <string name="title_profil">Profil</string>

    <!-- Login -->
    <string name="login_title">Masuk ke KalkD</string>
    <string name="login_subtitle">Silakan isi formulir akun Anda</string>
    <string name="hint_username">Username</string>
    <string name="hint_email">Email</string>
    <string name="hint_password">Password</string>
    <string name="hint_nama">Nama Lengkap</string>
    <string name="hint_kelas">Kelas</string>
    <string name="hint_jurusan">Jurusan</string>
    <string name="btn_login">Masuk</string>
    <string name="err_empty_field">Kolom ini tidak boleh kosong</string>
    <string name="err_invalid_email">Format email tidak valid</string>

    <!-- Home -->
    <string name="welcome_greeting">Selamat Datang,</string>
    <string name="home_subtitle">Aplikasi Manajemen Siswa, Kalkulator, dan Integrasi API</string>

    <!-- Kalkulator -->
    <string name="hint_angka_1">Angka Pertama</string>
    <string name="hint_angka_2">Angka Kedua</string>
    <string name="btn_tambah">+</string>
    <string name="btn_kurang">-</string>
    <string name="btn_kali">*</string>
    <string name="btn_bagi">/</string>
    <string name="btn_reset">Reset</string>
    <string name="hasil_label">Hasil Perhitungan:</string>
    <string name="err_division_by_zero">Tidak dapat membagi angka dengan nol (0)</string>
    <string name="err_input_empty">Silakan masukkan kedua angka</string>

    <!-- Data Siswa -->
    <string name="title_data_siswa">Data Siswa (Room DB)</string>
    <string name="tambah_siswa">Tambah Siswa</string>
    <string name="edit_siswa">Edit Data Siswa</string>
    <string name="simpan">Simpan</string>
    <string name="batal">Batal</string>
    <string name="hapus">Hapus</string>
    <string name="konfirmasi_hapus">Apakah Anda yakin ingin menghapus data ini?</string>
    <string name="hint_nilai">Nilai Siswa (0 - 100)</string>

    <!-- Web API -->
    <string name="title_api_user">Daftar Pengguna (JSONPlaceholder)</string>
    <string name="api_loading">Mengambil data dari server...</string>
    <string name="api_error">Gagal mengambil data. Periksa koneksi internet.</string>

    <!-- Profile -->
    <string name="btn_edit_profile">Edit Profil</string>
    <string name="btn_logout">Logout</string>
    <string name="konfirmasi_logout">Apakah Anda yakin ingin keluar dari akun ini?</string>
</resources>`
  },
  {
    path: 'app/src/main/res/values/colors.xml',
    name: 'colors.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Palet warna Material Design untuk KalkD',
    content: `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="primary">#1E3A8A</color>
    <color name="primary_dark">#172554</color>
    <color name="primary_light">#3B82F6</color>
    <color name="accent">#0EA5E9</color>
    <color name="secondary">#0284C7</color>
    
    <color name="background_light">#F8FAFC</color>
    <color name="card_background">#FFFFFF</color>
    <color name="surface_border">#E2E8F0</color>

    <color name="text_primary">#0F172A</color>
    <color name="text_secondary">#475569</color>
    <color name="text_muted">#94A3B8</color>
    <color name="text_on_primary">#FFFFFF</color>

    <color name="color_success">#10B981</color>
    <color name="color_danger">#EF4444</color>
    <color name="color_warning">#F59E0B</color>

    <color name="black">#FF000000</color>
    <color name="white">#FFFFFFFF</color>
    <color name="transparent">#00000000</color>
</resources>`
  },
  {
    path: 'app/src/main/res/values/themes.xml',
    name: 'themes.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Tema Material Design 3',
    content: `<resources xmlns:tools="http://schemas.android.com/tools">
    <style name="Theme.KalkD" parent="Theme.Material3.DayNight.NoActionBar">
        <item name="colorPrimary">@color/primary</item>
        <item name="colorPrimaryVariant">@color/primary_dark</item>
        <item name="colorOnPrimary">@color/text_on_primary</item>
        <item name="colorSecondary">@color/secondary</item>
        <item name="android:statusBarColor">@color/primary</item>
        <item name="android:windowLightStatusBar" tools:targetApi="m">false</item>
    </style>

    <style name="Theme.KalkD.Splash" parent="Theme.Material3.DayNight.NoActionBar">
        <item name="android:statusBarColor">@color/primary</item>
        <item name="android:windowBackground">@color/primary</item>
        <item name="android:windowLightStatusBar" tools:targetApi="m">false</item>
    </style>
</resources>`
  },
  {
    path: 'app/src/main/res/menu/bottom_nav_menu.xml',
    name: 'bottom_nav_menu.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Menu 5 tab BottomNavigationView',
    content: `<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <item
        android:id="@+id/nav_home"
        android:icon="@drawable/ic_home"
        android:title="@string/title_home" />
    <item
        android:id="@+id/nav_kalkulator"
        android:icon="@drawable/ic_calculator"
        android:title="@string/title_kalkulator" />
    <item
        android:id="@+id/nav_data"
        android:icon="@drawable/ic_database"
        android:title="@string/title_data" />
    <item
        android:id="@+id/nav_api"
        android:icon="@drawable/ic_api"
        android:title="@string/title_web_api" />
    <item
        android:id="@+id/nav_profile"
        android:icon="@drawable/ic_person"
        android:title="@string/title_profil" />
</menu>`
  },
  {
    path: 'app/src/main/res/layout/activity_splash.xml',
    name: 'activity_splash.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout Splash Screen dengan Logo KalkD',
    content: `<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/primary">

    <ImageView
        android:id="@+id/imgLogo"
        android:layout_width="110dp"
        android:layout_height="110dp"
        android:contentDescription="@string/app_name"
        android:src="@drawable/ic_logo_kalkd"
        app:layout_constraintBottom_toTopOf="@+id/tvAppName"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_chainStyle="packed" />

    <TextView
        android:id="@+id/tvAppName"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="16dp"
        android:text="@string/app_name"
        android:textColor="@color/white"
        android:textSize="32sp"
        android:textStyle="bold"
        app:layout_constraintBottom_toTopOf="@+id/tvTagline"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/imgLogo" />

    <TextView
        android:id="@+id/tvTagline"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="8dp"
        android:text="Aplikasi Siswa, Kalkulator dan Data API"
        android:textColor="#CBD5E1"
        android:textSize="14sp"
        app:layout_constraintBottom_toTopOf="@+id/progressBarSplash"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/tvAppName" />

    <ProgressBar
        android:id="@+id/progressBarSplash"
        android:layout_width="32dp"
        android:layout_height="32dp"
        android:layout_marginTop="32dp"
        android:indeterminateTint="@color/white"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/tvTagline" />

</androidx.constraintlayout.widget.ConstraintLayout>`
  },
  {
    path: 'app/src/main/res/layout/activity_login.xml',
    name: 'activity_login.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout Login Activity dengan 6 field input lengkap',
    content: `<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/background_light"
    android:fillViewport="true">

    <androidx.constraintlayout.widget.ConstraintLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:padding="24dp">

        <TextView
            android:id="@+id/tvLoginTitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="16dp"
            android:text="@string/login_title"
            android:textColor="@color/text_primary"
            android:textSize="26sp"
            android:textStyle="bold"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent" />

        <TextView
            android:id="@+id/tvLoginSubtitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="4dp"
            android:text="@string/login_subtitle"
            android:textColor="@color/text_secondary"
            android:textSize="14sp"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/tvLoginTitle" />

        <!-- Username Input -->
        <com.google.android.material.textfield.TextInputLayout
            android:id="@+id/tilUsername"
            style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="24dp"
            android:hint="@string/hint_username"
            app:boxCornerRadiusBottomEnd="8dp"
            app:boxCornerRadiusBottomStart="8dp"
            app:boxCornerRadiusTopEnd="8dp"
            app:boxCornerRadiusTopStart="8dp"
            app:layout_constraintTop_toBottomOf="@+id/tvLoginSubtitle">

            <com.google.android.material.textfield.TextInputEditText
                android:id="@+id/etUsername"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="textPersonName"
                android:maxLines="1" />
        </com.google.android.material.textfield.TextInputLayout>

        <!-- Email Input -->
        <com.google.android.material.textfield.TextInputLayout
            android:id="@+id/tilEmail"
            style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            android:hint="@string/hint_email"
            app:boxCornerRadiusBottomEnd="8dp"
            app:boxCornerRadiusBottomStart="8dp"
            app:boxCornerRadiusTopEnd="8dp"
            app:boxCornerRadiusTopStart="8dp"
            app:layout_constraintTop_toBottomOf="@+id/tilUsername">

            <com.google.android.material.textfield.TextInputEditText
                android:id="@+id/etEmail"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="textEmailAddress"
                android:maxLines="1" />
        </com.google.android.material.textfield.TextInputLayout>

        <!-- Password Input -->
        <com.google.android.material.textfield.TextInputLayout
            android:id="@+id/tilPassword"
            style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            android:hint="@string/hint_password"
            app:boxCornerRadiusBottomEnd="8dp"
            app:boxCornerRadiusBottomStart="8dp"
            app:boxCornerRadiusTopEnd="8dp"
            app:boxCornerRadiusTopStart="8dp"
            app:endIconMode="password_toggle"
            app:layout_constraintTop_toBottomOf="@+id/tilEmail">

            <com.google.android.material.textfield.TextInputEditText
                android:id="@+id/etPassword"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="textPassword"
                android:maxLines="1" />
        </com.google.android.material.textfield.TextInputLayout>

        <!-- Nama Lengkap Input -->
        <com.google.android.material.textfield.TextInputLayout
            android:id="@+id/tilNama"
            style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            android:hint="@string/hint_nama"
            app:boxCornerRadiusBottomEnd="8dp"
            app:boxCornerRadiusBottomStart="8dp"
            app:boxCornerRadiusTopEnd="8dp"
            app:boxCornerRadiusTopStart="8dp"
            app:layout_constraintTop_toBottomOf="@+id/tilPassword">

            <com.google.android.material.textfield.TextInputEditText
                android:id="@+id/etNama"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="textPersonName"
                android:maxLines="1" />
        </com.google.android.material.textfield.TextInputLayout>

        <!-- Kelas Input -->
        <com.google.android.material.textfield.TextInputLayout
            android:id="@+id/tilKelas"
            style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            android:hint="@string/hint_kelas"
            app:boxCornerRadiusBottomEnd="8dp"
            app:boxCornerRadiusBottomStart="8dp"
            app:boxCornerRadiusTopEnd="8dp"
            app:boxCornerRadiusTopStart="8dp"
            app:layout_constraintTop_toBottomOf="@+id/tilNama">

            <com.google.android.material.textfield.TextInputEditText
                android:id="@+id/etKelas"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="text"
                android:maxLines="1" />
        </com.google.android.material.textfield.TextInputLayout>

        <!-- Jurusan Input -->
        <com.google.android.material.textfield.TextInputLayout
            android:id="@+id/tilJurusan"
            style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            android:hint="@string/hint_jurusan"
            app:boxCornerRadiusBottomEnd="8dp"
            app:boxCornerRadiusBottomStart="8dp"
            app:boxCornerRadiusTopEnd="8dp"
            app:boxCornerRadiusTopStart="8dp"
            app:layout_constraintTop_toBottomOf="@+id/tilKelas">

            <com.google.android.material.textfield.TextInputEditText
                android:id="@+id/etJurusan"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="text"
                android:maxLines="1" />
        </com.google.android.material.textfield.TextInputLayout>

        <!-- Tombol Login -->
        <com.google.android.material.button.MaterialButton
            android:id="@+id/btnLogin"
            android:layout_width="match_parent"
            android:layout_height="56dp"
            android:layout_marginTop="24dp"
            android:layout_marginBottom="16dp"
            android:backgroundTint="@color/primary"
            android:text="@string/btn_login"
            android:textAllCaps="false"
            android:textSize="16sp"
            app:cornerRadius="8dp"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/tilJurusan" />

    </androidx.constraintlayout.widget.ConstraintLayout>
</ScrollView>`
  },
  {
    path: 'app/src/main/res/layout/activity_main.xml',
    name: 'activity_main.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout utama dengan FragmentContainerView dan BottomNavigationView',
    content: `<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/background_light">

    <androidx.fragment.app.FragmentContainerView
        android:id="@+id/fragment_container"
        android:layout_width="0dp"
        android:layout_height="0dp"
        app:layout_constraintBottom_toTopOf="@+id/bottom_navigation"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <com.google.android.material.bottomnavigation.BottomNavigationView
        android:id="@+id/bottom_navigation"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="@color/card_background"
        app:elevation="8dp"
        app:itemIconTint="@color/nav_item_color_state"
        app:itemTextColor="@color/nav_item_color_state"
        app:labelVisibilityMode="labeled"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:menu="@menu/bottom_nav_menu" />

</androidx.constraintlayout.widget.ConstraintLayout>`
  },
  {
    path: 'app/src/main/res/color/nav_item_color_state.xml',
    name: 'nav_item_color_state.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'State selector warna ikon bottom navigation',
    content: `<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:color="@color/primary" android:state_checked="true" />
    <item android:color="@color/text_muted" />
</selector>`
  },
  {
    path: 'app/src/main/res/layout/fragment_home.xml',
    name: 'fragment_home.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout Home Fragment dengan greeting dinamis',
    content: `<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/background_light"
    android:fillViewport="true">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="20dp">

        <!-- Header Card -->
        <com.google.android.material.card.MaterialCardView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            app:cardBackgroundColor="@color/primary"
            app:cardCornerRadius="16dp"
            app:cardElevation="4dp"
            app:strokeWidth="0dp">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="vertical"
                android:padding="24dp">

                <TextView
                    android:id="@+id/tvGreeting"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="@string/welcome_greeting"
                    android:textColor="#BAE6FD"
                    android:textSize="15sp" />

                <TextView
                    android:id="@+id/tvUserName"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_marginTop="4dp"
                    android:text="Pengguna KalkD"
                    android:textColor="@color/white"
                    android:textSize="22sp"
                    android:textStyle="bold" />

                <TextView
                    android:id="@+id/tvUserKelasJurusan"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_marginTop="4dp"
                    android:text="Kelas / Jurusan"
                    android:textColor="#E0F2FE"
                    android:textSize="14sp" />

            </LinearLayout>
        </com.google.android.material.card.MaterialCardView>

        <!-- Informasi Aplikasi -->
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="24dp"
            android:text="Fitur Utama Aplikasi"
            android:textColor="@color/text_primary"
            android:textSize="18sp"
            android:textStyle="bold" />

        <!-- Card Fitur Kalkulator -->
        <com.google.android.material.card.MaterialCardView
            android:id="@+id/cardFiturKalkulator"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            app:cardBackgroundColor="@color/card_background"
            app:cardCornerRadius="12dp"
            app:cardElevation="2dp"
            app:strokeColor="@color/surface_border"
            app:strokeWidth="1dp">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:padding="16dp">

                <ImageView
                    android:layout_width="44dp"
                    android:layout_height="44dp"
                    android:contentDescription="@string/title_kalkulator"
                    android:src="@drawable/ic_calculator"
                    app:tint="@color/primary" />

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:layout_marginStart="16dp"
                    android:orientation="vertical">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Kalkulator Aritmatika"
                        android:textColor="@color/text_primary"
                        android:textSize="16sp"
                        android:textStyle="bold" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="2dp"
                        android:text="Operasi penjumlahan, pengurangan, perkalian, dan pembagian"
                        android:textColor="@color/text_secondary"
                        android:textSize="13sp" />
                </LinearLayout>
            </LinearLayout>
        </com.google.android.material.card.MaterialCardView>

        <!-- Card Fitur Room DB -->
        <com.google.android.material.card.MaterialCardView
            android:id="@+id/cardFiturData"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            app:cardBackgroundColor="@color/card_background"
            app:cardCornerRadius="12dp"
            app:cardElevation="2dp"
            app:strokeColor="@color/surface_border"
            app:strokeWidth="1dp">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:padding="16dp">

                <ImageView
                    android:layout_width="44dp"
                    android:layout_height="44dp"
                    android:contentDescription="@string/title_data"
                    android:src="@drawable/ic_database"
                    app:tint="@color/secondary" />

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:layout_marginStart="16dp"
                    android:orientation="vertical">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Data Siswa (Room DB)"
                        android:textColor="@color/text_primary"
                        android:textSize="16sp"
                        android:textStyle="bold" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="2dp"
                        android:text="CRUD lokal SQLite permanen dengan data nilai siswa"
                        android:textColor="@color/text_secondary"
                        android:textSize="13sp" />
                </LinearLayout>
            </LinearLayout>
        </com.google.android.material.card.MaterialCardView>

        <!-- Card Fitur Web API -->
        <com.google.android.material.card.MaterialCardView
            android:id="@+id/cardFiturApi"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            app:cardBackgroundColor="@color/card_background"
            app:cardCornerRadius="12dp"
            app:cardElevation="2dp"
            app:strokeColor="@color/surface_border"
            app:strokeWidth="1dp">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:padding="16dp">

                <ImageView
                    android:layout_width="44dp"
                    android:layout_height="44dp"
                    android:contentDescription="@string/title_web_api"
                    android:src="@drawable/ic_api"
                    app:tint="@color/color_success" />

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:layout_marginStart="16dp"
                    android:orientation="vertical">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Web API Retrofit"
                        android:textColor="@color/text_primary"
                        android:textSize="16sp"
                        android:textStyle="bold" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:layout_marginTop="2dp"
                        android:text="Pengambilan data pengguna online dari JSONPlaceholder REST API"
                        android:textColor="@color/text_secondary"
                        android:textSize="13sp" />
                </LinearLayout>
            </LinearLayout>
        </com.google.android.material.card.MaterialCardView>

    </LinearLayout>
</ScrollView>`
  },
  {
    path: 'app/src/main/res/layout/fragment_kalkulator.xml',
    name: 'fragment_kalkulator.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout Kalkulator Fragment dengan 4 operasi aritmatika',
    content: `<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/background_light"
    android:fillViewport="true">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="20dp">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="@string/title_kalkulator"
            android:textColor="@color/text_primary"
            android:textSize="22sp"
            android:textStyle="bold" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="4dp"
            android:text="Hitung operasi matematika dasar dengan cepat dan akurat"
            android:textColor="@color/text_secondary"
            android:textSize="14sp" />

        <!-- Input Angka 1 -->
        <com.google.android.material.textfield.TextInputLayout
            android:id="@+id/tilAngka1"
            style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:hint="@string/hint_angka_1"
            app:boxCornerRadiusBottomEnd="8dp"
            app:boxCornerRadiusBottomStart="8dp"
            app:boxCornerRadiusTopEnd="8dp"
            app:boxCornerRadiusTopStart="8dp">

            <com.google.android.material.textfield.TextInputEditText
                android:id="@+id/etAngka1"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="numberDecimal|numberSigned" />
        </com.google.android.material.textfield.TextInputLayout>

        <!-- Input Angka 2 -->
        <com.google.android.material.textfield.TextInputLayout
            android:id="@+id/tilAngka2"
            style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            android:hint="@string/hint_angka_2"
            app:boxCornerRadiusBottomEnd="8dp"
            app:boxCornerRadiusBottomStart="8dp"
            app:boxCornerRadiusTopEnd="8dp"
            app:boxCornerRadiusTopStart="8dp">

            <com.google.android.material.textfield.TextInputEditText
                android:id="@+id/etAngka2"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="numberDecimal|numberSigned" />
        </com.google.android.material.textfield.TextInputLayout>

        <!-- Tombol Operasi 2x2 Grid -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="20dp"
            android:orientation="horizontal">

            <com.google.android.material.button.MaterialButton
                android:id="@+id/btnTambah"
                android:layout_width="0dp"
                android:layout_height="56dp"
                android:layout_marginEnd="6dp"
                android:layout_weight="1"
                android:backgroundTint="@color/primary"
                android:text="@string/btn_tambah"
                android:textSize="20sp"
                app:cornerRadius="8dp" />

            <com.google.android.material.button.MaterialButton
                android:id="@+id/btnKurang"
                android:layout_width="0dp"
                android:layout_height="56dp"
                android:layout_marginStart="6dp"
                android:layout_weight="1"
                android:backgroundTint="@color/primary"
                android:text="@string/btn_kurang"
                android:textSize="20sp"
                app:cornerRadius="8dp" />
        </LinearLayout>

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            android:orientation="horizontal">

            <com.google.android.material.button.MaterialButton
                android:id="@+id/btnKali"
                android:layout_width="0dp"
                android:layout_height="56dp"
                android:layout_marginEnd="6dp"
                android:layout_weight="1"
                android:backgroundTint="@color/primary"
                android:text="@string/btn_kali"
                android:textSize="20sp"
                app:cornerRadius="8dp" />

            <com.google.android.material.button.MaterialButton
                android:id="@+id/btnBagi"
                android:layout_width="0dp"
                android:layout_height="56dp"
                android:layout_marginStart="6dp"
                android:layout_weight="1"
                android:backgroundTint="@color/primary"
                android:text="@string/btn_bagi"
                android:textSize="20sp"
                app:cornerRadius="8dp" />
        </LinearLayout>

        <!-- Tombol Reset -->
        <com.google.android.material.button.MaterialButton
            android:id="@+id/btnReset"
            style="@style/Widget.MaterialComponents.Button.OutlinedButton"
            android:layout_width="match_parent"
            android:layout_height="50dp"
            android:layout_marginTop="12dp"
            android:text="@string/btn_reset"
            android:textColor="@color/color_danger"
            app:cornerRadius="8dp"
            app:strokeColor="@color/color_danger" />

        <!-- Card Hasil Perhitungan -->
        <com.google.android.material.card.MaterialCardView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="24dp"
            app:cardBackgroundColor="@color/card_background"
            app:cardCornerRadius="12dp"
            app:cardElevation="2dp"
            app:strokeColor="@color/surface_border"
            app:strokeWidth="1dp">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="vertical"
                android:padding="20dp">

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="@string/hasil_label"
                    android:textColor="@color/text_secondary"
                    android:textSize="14sp" />

                <TextView
                    android:id="@+id/tvHasil"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:layout_marginTop="8dp"
                    android:text="0"
                    android:textColor="@color/primary"
                    android:textSize="32sp"
                    android:textStyle="bold" />

            </LinearLayout>
        </com.google.android.material.card.MaterialCardView>

    </LinearLayout>
</ScrollView>`
  },
  {
    path: 'app/src/main/res/layout/fragment_data.xml',
    name: 'fragment_data.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout Data Fragment Room Database dengan RecyclerView & FloatingActionButton',
    content: `<?xml version="1.0" encoding="utf-8"?>
<androidx.coordinatorlayout.widget.CoordinatorLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/background_light">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical"
        android:padding="16dp">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="@string/title_data_siswa"
            android:textColor="@color/text_primary"
            android:textSize="22sp"
            android:textStyle="bold" />

        <TextView
            android:id="@+id/tvJumlahData"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="2dp"
            android:text="Memuat data..."
            android:textColor="@color/text_secondary"
            android:textSize="13sp" />

        <!-- Empty State -->
        <TextView
            android:id="@+id/tvEmptyState"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="60dp"
            android:gravity="center"
            android:text="Belum ada data siswa. Tekan tombol + untuk menambahkan."
            android:textColor="@color/text_muted"
            android:textSize="14sp"
            android:visibility="gone" />

        <androidx.recyclerview.widget.RecyclerView
            android:id="@+id/rvSiswa"
            android:layout_width="match_parent"
            android:layout_height="0dp"
            android:layout_marginTop="12dp"
            android:layout_weight="1"
            android:clipToPadding="false"
            android:paddingBottom="80dp" />

    </LinearLayout>

    <com.google.android.material.floatingactionbutton.FloatingActionButton
        android:id="@+id/fabTambahSiswa"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="bottom|end"
        android:layout_margin="20dp"
        android:backgroundTint="@color/primary"
        android:contentDescription="@string/tambah_siswa"
        android:src="@android:drawable/ic_input_add"
        app:tint="@color/white" />

</androidx.coordinatorlayout.widget.CoordinatorLayout>`
  },
  {
    path: 'app/src/main/res/layout/item_siswa.xml',
    name: 'item_siswa.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout item RecyclerView untuk data siswa',
    content: `<?xml version="1.0" encoding="utf-8"?>
<com.google.android.material.card.MaterialCardView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_marginBottom="10dp"
    app:cardBackgroundColor="@color/card_background"
    app:cardCornerRadius="12dp"
    app:cardElevation="2dp"
    app:strokeColor="@color/surface_border"
    app:strokeWidth="1dp">

    <androidx.constraintlayout.widget.ConstraintLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:padding="16dp">

        <TextView
            android:id="@+id/tvItemNama"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:text="Nama Siswa"
            android:textColor="@color/text_primary"
            android:textSize="16sp"
            android:textStyle="bold"
            app:layout_constraintEnd_toStartOf="@+id/tvItemNilaiBadge"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent" />

        <TextView
            android:id="@+id/tvItemKelas"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginTop="4dp"
            android:text="Kelas: XII RPL 1"
            android:textColor="@color/text_secondary"
            android:textSize="13sp"
            app:layout_constraintEnd_toStartOf="@+id/tvItemNilaiBadge"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/tvItemNama" />

        <TextView
            android:id="@+id/tvItemJurusan"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginTop="2dp"
            android:text="Jurusan: Rekayasa Perangkat Lunak"
            android:textColor="@color/text_muted"
            android:textSize="12sp"
            app:layout_constraintEnd_toStartOf="@+id/tvItemNilaiBadge"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/tvItemKelas" />

        <!-- Badge Nilai -->
        <TextView
            android:id="@+id/tvItemNilaiBadge"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:background="@color/primary_light"
            android:paddingHorizontal="10dp"
            android:paddingVertical="4dp"
            android:text="Nilai: 90"
            android:textColor="@color/white"
            android:textSize="12sp"
            android:textStyle="bold"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintTop_toTopOf="parent" />

        <!-- Tombol Aksi Edit & Hapus -->
        <LinearLayout
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="12dp"
            android:orientation="horizontal"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/tvItemJurusan">

            <com.google.android.material.button.MaterialButton
                android:id="@+id/btnEditSiswa"
                style="@style/Widget.MaterialComponents.Button.TextButton"
                android:layout_width="wrap_content"
                android:layout_height="36dp"
                android:text="Edit"
                android:textColor="@color/primary"
                android:textSize="12sp" />

            <com.google.android.material.button.MaterialButton
                android:id="@+id/btnHapusSiswa"
                style="@style/Widget.MaterialComponents.Button.TextButton"
                android:layout_width="wrap_content"
                android:layout_height="36dp"
                android:text="Hapus"
                android:textColor="@color/color_danger"
                android:textSize="12sp" />
        </LinearLayout>

    </androidx.constraintlayout.widget.ConstraintLayout>
</com.google.android.material.card.MaterialCardView>`
  },
  {
    path: 'app/src/main/res/layout/dialog_add_edit_siswa.xml',
    name: 'dialog_add_edit_siswa.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout Dialog Form Tambah dan Edit Siswa',
    content: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:padding="20dp">

    <TextView
        android:id="@+id/tvDialogTitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/tambah_siswa"
        android:textColor="@color/text_primary"
        android:textSize="18sp"
        android:textStyle="bold" />

    <com.google.android.material.textfield.TextInputLayout
        android:id="@+id/tilDialogNama"
        style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="16dp"
        android:hint="@string/hint_nama">

        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/etDialogNama"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="textPersonName" />
    </com.google.android.material.textfield.TextInputLayout>

    <com.google.android.material.textfield.TextInputLayout
        android:id="@+id/tilDialogKelas"
        style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"
        android:hint="@string/hint_kelas">

        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/etDialogKelas"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="text" />
    </com.google.android.material.textfield.TextInputLayout>

    <com.google.android.material.textfield.TextInputLayout
        android:id="@+id/tilDialogJurusan"
        style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"
        android:hint="@string/hint_jurusan">

        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/etDialogJurusan"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="text" />
    </com.google.android.material.textfield.TextInputLayout>

    <com.google.android.material.textfield.TextInputLayout
        android:id="@+id/tilDialogNilai"
        style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"
        android:hint="@string/hint_nilai">

        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/etDialogNilai"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="numberDecimal" />
    </com.google.android.material.textfield.TextInputLayout>

</LinearLayout>`
  },
  {
    path: 'app/src/main/res/layout/fragment_web_api.xml',
    name: 'fragment_web_api.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout Web API Fragment dengan ProgressBar dan RecyclerView',
    content: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/background_light"
    android:orientation="vertical"
    android:padding="16dp">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/title_api_user"
        android:textColor="@color/text_primary"
        android:textSize="22sp"
        android:textStyle="bold" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="2dp"
        android:text="Endpoint: https://jsonplaceholder.typicode.com/users"
        android:textColor="@color/text_secondary"
        android:textSize="12sp" />

    <ProgressBar
        android:id="@+id/progressBarApi"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:layout_marginTop="32dp"
        android:indeterminateTint="@color/primary"
        android:visibility="gone" />

    <TextView
        android:id="@+id/tvErrorApi"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="24dp"
        android:gravity="center"
        android:text="@string/api_error"
        android:textColor="@color/color_danger"
        android:textSize="14sp"
        android:visibility="gone" />

    <com.google.android.material.button.MaterialButton
        android:id="@+id/btnRetryApi"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:layout_marginTop="8dp"
        android:text="Coba Lagi"
        android:visibility="gone" />

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/rvUsersApi"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_marginTop="12dp"
        android:layout_weight="1"
        android:clipToPadding="false"
        android:paddingBottom="16dp" />

</LinearLayout>`
  },
  {
    path: 'app/src/main/res/layout/item_user_api.xml',
    name: 'item_user_api.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout item list pengguna Retrofit API',
    content: `<?xml version="1.0" encoding="utf-8"?>
<com.google.android.material.card.MaterialCardView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_marginBottom="10dp"
    app:cardBackgroundColor="@color/card_background"
    app:cardCornerRadius="12dp"
    app:cardElevation="2dp"
    app:strokeColor="@color/surface_border"
    app:strokeWidth="1dp">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="16dp">

        <TextView
            android:id="@+id/tvApiUserName"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Leanne Graham"
            android:textColor="@color/text_primary"
            android:textSize="16sp"
            android:textStyle="bold" />

        <TextView
            android:id="@+id/tvApiUserUsername"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="2dp"
            android:text="@Bret"
            android:textColor="@color/primary"
            android:textSize="13sp" />

        <TextView
            android:id="@+id/tvApiUserEmail"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="6dp"
            android:text="Email: Sincere@april.biz"
            android:textColor="@color/text_secondary"
            android:textSize="13sp" />

        <TextView
            android:id="@+id/tvApiUserPhone"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="2dp"
            android:text="Telepon: 1-770-736-8031"
            android:textColor="@color/text_secondary"
            android:textSize="13sp" />

        <TextView
            android:id="@+id/tvApiUserCompany"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="2dp"
            android:text="Perusahaan: Romaguera-Crona"
            android:textColor="@color/text_muted"
            android:textSize="12sp" />

        <TextView
            android:id="@+id/tvApiUserCity"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="2dp"
            android:text="Kota: Gwenborough"
            android:textColor="@color/text_muted"
            android:textSize="12sp" />

    </LinearLayout>
</com.google.android.material.card.MaterialCardView>`
  },
  {
    path: 'app/src/main/res/layout/fragment_profile.xml',
    name: 'fragment_profile.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout Profile Fragment dengan CircleImageView dan tombol Edit & Logout',
    content: `<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/background_light"
    android:fillViewport="true">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center_horizontal"
        android:orientation="vertical"
        android:padding="24dp">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="@string/title_profil"
            android:textColor="@color/text_primary"
            android:textSize="22sp"
            android:textStyle="bold" />

        <!-- CircleImageView untuk Foto Profil -->
        <FrameLayout
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="24dp">

            <de.hdodenhof.circleimageview.CircleImageView
                android:id="@+id/imgProfile"
                android:layout_width="120dp"
                android:layout_height="120dp"
                android:src="@drawable/ic_person"
                app:civ_border_color="@color/primary"
                app:civ_border_width="3dp" />

            <com.google.android.material.floatingactionbutton.FloatingActionButton
                android:id="@+id/fabChangePhoto"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_gravity="bottom|end"
                android:backgroundTint="@color/primary"
                android:contentDescription="Ubah Foto"
                android:src="@android:drawable/ic_menu_camera"
                app:fabCustomSize="38dp"
                app:tint="@color/white" />
        </FrameLayout>

        <TextView
            android:id="@+id/tvProfileNama"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="16dp"
            android:text="Nama Pengguna"
            android:textColor="@color/text_primary"
            android:textSize="20sp"
            android:textStyle="bold" />

        <TextView
            android:id="@+id/tvProfileUsername"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="2dp"
            android:text="@username"
            android:textColor="@color/primary"
            android:textSize="14sp" />

        <!-- Card Detail Profil -->
        <com.google.android.material.card.MaterialCardView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="24dp"
            app:cardBackgroundColor="@color/card_background"
            app:cardCornerRadius="12dp"
            app:cardElevation="2dp"
            app:strokeColor="@color/surface_border"
            app:strokeWidth="1dp">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="vertical"
                android:padding="20dp">

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="Email"
                    android:textColor="@color/text_muted"
                    android:textSize="12sp" />

                <TextView
                    android:id="@+id/tvProfileEmail"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_marginTop="2dp"
                    android:text="email@example.com"
                    android:textColor="@color/text_primary"
                    android:textSize="15sp"
                    android:textStyle="bold" />

                <View
                    android:layout_width="match_parent"
                    android:layout_height="1dp"
                    android:layout_marginVertical="12dp"
                    android:background="@color/surface_border" />

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="Kelas"
                    android:textColor="@color/text_muted"
                    android:textSize="12sp" />

                <TextView
                    android:id="@+id/tvProfileKelas"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_marginTop="2dp"
                    android:text="XII RPL 1"
                    android:textColor="@color/text_primary"
                    android:textSize="15sp"
                    android:textStyle="bold" />

                <View
                    android:layout_width="match_parent"
                    android:layout_height="1dp"
                    android:layout_marginVertical="12dp"
                    android:background="@color/surface_border" />

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="Jurusan"
                    android:textColor="@color/text_muted"
                    android:textSize="12sp" />

                <TextView
                    android:id="@+id/tvProfileJurusan"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_marginTop="2dp"
                    android:text="Rekayasa Perangkat Lunak"
                    android:textColor="@color/text_primary"
                    android:textSize="15sp"
                    android:textStyle="bold" />

            </LinearLayout>
        </com.google.android.material.card.MaterialCardView>

        <!-- Tombol Edit Profil -->
        <com.google.android.material.button.MaterialButton
            android:id="@+id/btnEditProfile"
            android:layout_width="match_parent"
            android:layout_height="52dp"
            android:layout_marginTop="20dp"
            android:backgroundTint="@color/primary"
            android:text="@string/btn_edit_profile"
            android:textAllCaps="false"
            app:cornerRadius="8dp" />

        <!-- Tombol Logout -->
        <com.google.android.material.button.MaterialButton
            android:id="@+id/btnLogout"
            style="@style/Widget.MaterialComponents.Button.OutlinedButton"
            android:layout_width="match_parent"
            android:layout_height="52dp"
            android:layout_marginTop="12dp"
            android:text="@string/btn_logout"
            android:textAllCaps="false"
            android:textColor="@color/color_danger"
            app:cornerRadius="8dp"
            app:strokeColor="@color/color_danger" />

    </LinearLayout>
</ScrollView>`
  },
  {
    path: 'app/src/main/res/layout/dialog_edit_profile.xml',
    name: 'dialog_edit_profile.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Layout Dialog Edit Profil untuk update session',
    content: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:padding="20dp">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Perbarui Data Profil"
        android:textColor="@color/text_primary"
        android:textSize="18sp"
        android:textStyle="bold" />

    <com.google.android.material.textfield.TextInputLayout
        android:id="@+id/tilEditNama"
        style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="16dp"
        android:hint="@string/hint_nama">

        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/etEditNama"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="textPersonName" />
    </com.google.android.material.textfield.TextInputLayout>

    <com.google.android.material.textfield.TextInputLayout
        android:id="@+id/tilEditKelas"
        style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"
        android:hint="@string/hint_kelas">

        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/etEditKelas"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="text" />
    </com.google.android.material.textfield.TextInputLayout>

    <com.google.android.material.textfield.TextInputLayout
        android:id="@+id/tilEditJurusan"
        style="@style/Widget.MaterialComponents.TextInputLayout.OutlinedBox"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dp"
        android:hint="@string/hint_jurusan">

        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/etEditJurusan"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="text" />
    </com.google.android.material.textfield.TextInputLayout>

</LinearLayout>`
  },
  {
    path: 'app/src/main/res/drawable/ic_logo_kalkd.xml',
    name: 'ic_logo_kalkd.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Vector drawable Logo KalkD',
    content: `<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="96dp"
    android:height="96dp"
    android:viewportWidth="96"
    android:viewportHeight="96">
  <path
      android:fillColor="#38BDF8"
      android:pathData="M48,8C25.9,8 8,25.9 8,48s17.9,40 40,40s40,-17.9 40,-40S70.1,8 48,8z M68,52H52v16h-8V52H28v-8h16V28h8v16h16V52z"/>
</vector>`
  },
  {
    path: 'app/src/main/res/drawable/ic_home.xml',
    name: 'ic_home.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Vector drawable ikon Home',
    content: `<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
  <path
      android:fillColor="#FF000000"
      android:pathData="M10,20v-6h4v6h5v-8h3L12,3 2,12h3v8z"/>
</vector>`
  },
  {
    path: 'app/src/main/res/drawable/ic_calculator.xml',
    name: 'ic_calculator.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Vector drawable ikon Kalkulator',
    content: `<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
  <path
      android:fillColor="#FF000000"
      android:pathData="M19,3H5C3.9,3 3,3.9 3,5v14c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2V5C21,3.9 20.1,3 19,3z M19,19H5V5h14V19z M7,7h10v2H7V7z M7,11h2v2H7V11z M11,11h2v2h-2V11z M15,11h2v2h-2V11z M7,15h2v2H7V15z M11,15h2v2h-2V15z M15,15h2v2h-2V15z"/>
</vector>`
  },
  {
    path: 'app/src/main/res/drawable/ic_database.xml',
    name: 'ic_database.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Vector drawable ikon Database',
    content: `<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
  <path
      android:fillColor="#FF000000"
      android:pathData="M12,2C6.48,2 2,3.79 2,6v12c0,2.21 4.48,4 10,4s10,-1.79 10,-4V6C22,3.79 17.52,2 12,2z M12,4c4.97,0 8,1.5 8,2s-3.03,2 -8,2 -8,-1.5 -8,-2 3.03,-2 8,-2z M20,18c0,0.5 -3.03,2 -8,2s-8,-1.5 -8,-2v-2.23c1.94,1.38 5.02,2.23 8,2.23s6.06,-0.85 8,-2.23V18z M20,12.77c-1.94,1.38 -5.02,2.23 -8,2.23s-6.06,-0.85 -8,-2.23V10.5c1.94,1.38 5.02,2.23 8,2.23s6.06,-0.85 8,-2.23V12.77z"/>
</vector>`
  },
  {
    path: 'app/src/main/res/drawable/ic_api.xml',
    name: 'ic_api.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Vector drawable ikon Web API',
    content: `<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
  <path
      android:fillColor="#FF000000"
      android:pathData="M14,12l-2,2 -2,-2 2,-2 2,2z M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2z M12,20c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8 8,3.59 8,8 -3.59,8 -8,8z"/>
</vector>`
  },
  {
    path: 'app/src/main/res/drawable/ic_person.xml',
    name: 'ic_person.xml',
    language: 'xml',
    category: 'Resources & Layouts',
    description: 'Vector drawable ikon Profil / Akun',
    content: `<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
  <path
      android:fillColor="#94A3B8"
      android:pathData="M12,12c2.21,0 4,-1.79 4,-4s-1.79,-4 -4,-4 -4,1.79 -4,4 1.79,4 4,4z M12,14c-2.67,0 -8,1.34 -8,4v2h16v-2c0,-2.66 -5.33,-4 -8,-4z"/>
</vector>`
  }
];
