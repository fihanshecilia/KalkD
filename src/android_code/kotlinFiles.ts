import { AndroidFile } from './gradleAndManifest';

export const kotlinFiles: AndroidFile[] = [
  {
    path: 'app/src/main/java/com/fihan/kalkd/util/SessionManager.kt',
    name: 'SessionManager.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Manajemen SharedPreferences untuk status login dan profil pengguna',
    content: `package com.fihan.kalkd.util

import android.content.Context
import android.content.SharedPreferences

class SessionManager(context: Context) {

    private val pref: SharedPreferences =
        context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE)
    private val editor: SharedPreferences.Editor = pref.edit()

    companion object {
        private const val PREF_NAME = "KalkDSessionPref"
        private const val IS_LOGGED_IN = "isLoggedIn"
        private const val KEY_USERNAME = "username"
        private const val KEY_EMAIL = "email"
        private const val KEY_NAMA = "nama"
        private const val KEY_KELAS = "kelas"
        private const val KEY_JURUSAN = "jurusan"
        private const val KEY_IMAGE_URI = "imageUri"
    }

    fun saveUser(
        username: String,
        email: String,
        nama: String,
        kelas: String,
        jurusan: String
    ) {
        editor.putBoolean(IS_LOGGED_IN, true)
        editor.putString(KEY_USERNAME, username)
        editor.putString(KEY_EMAIL, email)
        editor.putString(KEY_NAMA, nama)
        editor.putString(KEY_KELAS, kelas)
        editor.putString(KEY_JURUSAN, jurusan)
        editor.apply()
    }

    fun updateProfile(nama: String, kelas: String, jurusan: String) {
        editor.putString(KEY_NAMA, nama)
        editor.putString(KEY_KELAS, kelas)
        editor.putString(KEY_JURUSAN, jurusan)
        editor.apply()
    }

    fun saveImageUri(uriString: String) {
        editor.putString(KEY_IMAGE_URI, uriString)
        editor.apply()
    }

    fun getImageUri(): String? {
        return pref.getString(KEY_IMAGE_URI, null)
    }

    fun isLoggedIn(): Boolean {
        return pref.getBoolean(IS_LOGGED_IN, false)
    }

    fun getUsername(): String {
        return pref.getString(KEY_USERNAME, "") ?: ""
    }

    fun getEmail(): String {
        return pref.getString(KEY_EMAIL, "") ?: ""
    }

    fun getNama(): String {
        return pref.getString(KEY_NAMA, "") ?: ""
    }

    fun getKelas(): String {
        return pref.getString(KEY_KELAS, "") ?: ""
    }

    fun getJurusan(): String {
        return pref.getString(KEY_JURUSAN, "") ?: ""
    }

    fun logout() {
        editor.clear()
        editor.apply()
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/SplashActivity.kt',
    name: 'SplashActivity.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Splash screen dengan delay 2 detik dan pengecekan session login',
    content: `package com.fihan.kalkd

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.appcompat.app.AppCompatActivity
import com.fihan.kalkd.databinding.ActivitySplashBinding
import com.fihan.kalkd.util.SessionManager

@SuppressLint("CustomSplashScreen")
class SplashActivity : AppCompatActivity() {

    private lateinit var binding: ActivitySplashBinding
    private lateinit var sessionManager: SessionManager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySplashBinding.inflate(layoutInflater)
        setContentView(binding.root)

        sessionManager = SessionManager(this)

        Handler(Looper.getMainLooper()).postDelayed({
            if (sessionManager.isLoggedIn()) {
                val intent = Intent(this@SplashActivity, MainActivity::class.java)
                startActivity(intent)
            } else {
                val intent = Intent(this@SplashActivity, LoginActivity::class.java)
                startActivity(intent)
            }
            finish()
        }, 2000L)
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/LoginActivity.kt',
    name: 'LoginActivity.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Form Login dengan validasi lengkap 6 field dan penyimpanan Session',
    content: `package com.fihan.kalkd

import android.content.Intent
import android.os.Bundle
import android.util.Patterns
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.fihan.kalkd.databinding.ActivityLoginBinding
import com.fihan.kalkd.util.SessionManager

class LoginActivity : AppCompatActivity() {

    private lateinit var binding: ActivityLoginBinding
    private lateinit var sessionManager: SessionManager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        sessionManager = SessionManager(this)

        binding.btnLogin.setOnClickListener {
            handleLogin()
        }
    }

    private fun handleLogin() {
        val username = binding.etUsername.text.toString().trim()
        val email = binding.etEmail.text.toString().trim()
        val password = binding.etPassword.text.toString().trim()
        val nama = binding.etNama.text.toString().trim()
        val kelas = binding.etKelas.text.toString().trim()
        val jurusan = binding.etJurusan.text.toString().trim()

        if (username.isEmpty()) {
            binding.tilUsername.error = getString(R.string.err_empty_field)
            binding.etUsername.requestFocus()
            return
        } else {
            binding.tilUsername.error = null
        }

        if (email.isEmpty()) {
            binding.tilEmail.error = getString(R.string.err_empty_field)
            binding.etEmail.requestFocus()
            return
        } else if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            binding.tilEmail.error = getString(R.string.err_invalid_email)
            binding.etEmail.requestFocus()
            return
        } else {
            binding.tilEmail.error = null
        }

        if (password.isEmpty()) {
            binding.tilPassword.error = getString(R.string.err_empty_field)
            binding.etPassword.requestFocus()
            return
        } else {
            binding.tilPassword.error = null
        }

        if (nama.isEmpty()) {
            binding.tilNama.error = getString(R.string.err_empty_field)
            binding.etNama.requestFocus()
            return
        } else {
            binding.tilNama.error = null
        }

        if (kelas.isEmpty()) {
            binding.tilKelas.error = getString(R.string.err_empty_field)
            binding.etKelas.requestFocus()
            return
        } else {
            binding.tilKelas.error = null
        }

        if (jurusan.isEmpty()) {
            binding.tilJurusan.error = getString(R.string.err_empty_field)
            binding.etJurusan.requestFocus()
            return
        } else {
            binding.tilJurusan.error = null
        }

        sessionManager.saveUser(
            username = username,
            email = email,
            nama = nama,
            kelas = kelas,
            jurusan = jurusan
        )

        Toast.makeText(this, "Login berhasil. Selamat datang, $nama!", Toast.LENGTH_SHORT).show()

        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
        finish()
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/MainActivity.kt',
    name: 'MainActivity.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Activity utama dengan BottomNavigationView dan FragmentContainerView',
    content: `package com.fihan.kalkd

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.fihan.kalkd.databinding.ActivityMainBinding
import com.fihan.kalkd.fragment.DataFragment
import com.fihan.kalkd.fragment.HomeFragment
import com.fihan.kalkd.fragment.KalkulatorFragment
import com.fihan.kalkd.fragment.ProfileFragment
import com.fihan.kalkd.fragment.WebApiFragment

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        if (savedInstanceState == null) {
            loadFragment(HomeFragment())
        }

        binding.bottomNavigation.setOnItemSelectedListener { item ->
            when (item.itemId) {
                R.id.nav_home -> {
                    loadFragment(HomeFragment())
                    true
                }
                R.id.nav_kalkulator -> {
                    loadFragment(KalkulatorFragment())
                    true
                }
                R.id.nav_data -> {
                    loadFragment(DataFragment())
                    true
                }
                R.id.nav_api -> {
                    loadFragment(WebApiFragment())
                    true
                }
                R.id.nav_profile -> {
                    loadFragment(ProfileFragment())
                    true
                }
                else -> false
            }
        }
    }

    private fun loadFragment(fragment: Fragment) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commit()
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/fragment/HomeFragment.kt',
    name: 'HomeFragment.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Fragment 1 - Home dengan salam dinamis dari SessionManager',
    content: `package com.fihan.kalkd.fragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.fihan.kalkd.R
import com.fihan.kalkd.databinding.FragmentHomeBinding
import com.fihan.kalkd.util.SessionManager

class HomeFragment : Fragment() {

    private var _binding: FragmentHomeBinding? = null
    private val binding get() = _binding!!
    private lateinit var sessionManager: SessionManager

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentHomeBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        sessionManager = SessionManager(requireContext())

        val nama = sessionManager.getNama()
        val kelas = sessionManager.getKelas()
        val jurusan = sessionManager.getJurusan()

        binding.tvGreeting.text = getString(R.string.welcome_greeting)
        binding.tvUserName.text = if (nama.isNotEmpty()) nama else "Pengguna KalkD"
        binding.tvUserKelasJurusan.text = "$kelas | $jurusan"

        binding.cardFiturKalkulator.setOnClickListener {
            parentFragmentManager.beginTransaction()
                .replace(R.id.fragment_container, KalkulatorFragment())
                .commit()
        }

        binding.cardFiturData.setOnClickListener {
            parentFragmentManager.beginTransaction()
                .replace(R.id.fragment_container, DataFragment())
                .commit()
        }

        binding.cardFiturApi.setOnClickListener {
            parentFragmentManager.beginTransaction()
                .replace(R.id.fragment_container, WebApiFragment())
                .commit()
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/fragment/KalkulatorFragment.kt',
    name: 'KalkulatorFragment.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Fragment 2 - Kalkulator dengan operasi +, -, *, / dan validasi nol',
    content: `package com.fihan.kalkd.fragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.fihan.kalkd.R
import com.fihan.kalkd.databinding.FragmentKalkulatorBinding
import java.text.DecimalFormat

class KalkulatorFragment : Fragment() {

    private var _binding: FragmentKalkulatorBinding? = null
    private val binding get() = _binding!!
    private val decimalFormat = DecimalFormat("#.######")

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentKalkulatorBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.btnTambah.setOnClickListener { hitung('+') }
        binding.btnKurang.setOnClickListener { hitung('-') }
        binding.btnKali.setOnClickListener { hitung('*') }
        binding.btnBagi.setOnClickListener { hitung('/') }

        binding.btnReset.setOnClickListener {
            binding.etAngka1.text?.clear()
            binding.etAngka2.text?.clear()
            binding.tvHasil.text = "0"
            binding.tilAngka1.error = null
            binding.tilAngka2.error = null
        }
    }

    private fun hitung(operasi: Char) {
        val strAngka1 = binding.etAngka1.text.toString().trim()
        val strAngka2 = binding.etAngka2.text.toString().trim()

        var isValid = true

        if (strAngka1.isEmpty()) {
            binding.tilAngka1.error = getString(R.string.err_empty_field)
            isValid = false
        } else {
            binding.tilAngka1.error = null
        }

        if (strAngka2.isEmpty()) {
            binding.tilAngka2.error = getString(R.string.err_empty_field)
            isValid = false
        } else {
            binding.tilAngka2.error = null
        }

        if (!isValid) {
            Toast.makeText(requireContext(), getString(R.string.err_input_empty), Toast.LENGTH_SHORT).show()
            return
        }

        val angka1 = strAngka1.toDoubleOrNull()
        val angka2 = strAngka2.toDoubleOrNull()

        if (angka1 == null || angka2 == null) {
            Toast.makeText(requireContext(), "Input angka tidak valid", Toast.LENGTH_SHORT).show()
            return
        }

        when (operasi) {
            '+' -> {
                val hasil = angka1 + angka2
                binding.tvHasil.text = decimalFormat.format(hasil)
            }
            '-' -> {
                val hasil = angka1 - angka2
                binding.tvHasil.text = decimalFormat.format(hasil)
            }
            '*' -> {
                val hasil = angka1 * angka2
                binding.tvHasil.text = decimalFormat.format(hasil)
            }
            '/' -> {
                if (angka2 == 0.0) {
                    binding.tilAngka2.error = getString(R.string.err_division_by_zero)
                    Toast.makeText(requireContext(), getString(R.string.err_division_by_zero), Toast.LENGTH_LONG).show()
                    binding.tvHasil.text = "Error"
                } else {
                    val hasil = angka1 / angka2
                    binding.tvHasil.text = decimalFormat.format(hasil)
                }
            }
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/database/SiswaEntity.kt',
    name: 'SiswaEntity.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Entity Room Database tabel siswa_data',
    content: `package com.fihan.kalkd.database

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "siswa_data")
data class SiswaEntity(
    @PrimaryKey(autoGenerate = true)
    val id: Int = 0,

    @ColumnInfo(name = "nama")
    val nama: String,

    @ColumnInfo(name = "kelas")
    val kelas: String,

    @ColumnInfo(name = "jurusan")
    val jurusan: String,

    @ColumnInfo(name = "nilai")
    val nilai: Double
)`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/database/SiswaDao.kt',
    name: 'SiswaDao.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Data Access Object (DAO) Room untuk operasi CRUD siswa',
    content: `package com.fihan.kalkd.database

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update

@Dao
interface SiswaDao {

    @Query("SELECT * FROM siswa_data ORDER BY id DESC")
    suspend fun getAllData(): List<SiswaEntity>

    @Query("SELECT COUNT(*) FROM siswa_data")
    suspend fun getCount(): Int

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertData(siswa: SiswaEntity): Long

    @Update
    suspend fun updateData(siswa: SiswaEntity)

    @Delete
    suspend fun deleteData(siswa: SiswaEntity)
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/database/AppDatabase.kt',
    name: 'AppDatabase.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Singleton Room Database AppDatabase',
    content: `package com.fihan.kalkd.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase

@Database(entities = [SiswaEntity::class], version = 1, exportSchema = false)
abstract class AppDatabase : RoomDatabase() {

    abstract fun siswaDao(): SiswaDao

    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null

        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "kalkd_database.db"
                )
                    .fallbackToDestructiveMigration()
                    .build()
                INSTANCE = instance
                instance
            }
        }
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/adapter/SiswaAdapter.kt',
    name: 'SiswaAdapter.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Adapter RecyclerView untuk menampilkan list data SiswaEntity dengan aksi Edit & Hapus',
    content: `package com.fihan.kalkd.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.fihan.kalkd.database.SiswaEntity
import com.fihan.kalkd.databinding.ItemSiswaBinding

class SiswaAdapter(
    private var listSiswa: MutableList<SiswaEntity>,
    private val onEditClick: (SiswaEntity) -> Unit,
    private val onDeleteClick: (SiswaEntity) -> Unit
) : RecyclerView.Adapter<SiswaAdapter.SiswaViewHolder>() {

    inner class SiswaViewHolder(private val binding: ItemSiswaBinding) :
        RecyclerView.ViewHolder(binding.root) {

        fun bind(siswa: SiswaEntity) {
            binding.tvItemNama.text = siswa.nama
            binding.tvItemKelas.text = "Kelas: " + siswa.kelas
            binding.tvItemJurusan.text = "Jurusan: " + siswa.jurusan
            binding.tvItemNilaiBadge.text = "Nilai: " + siswa.nilai.toString()

            binding.btnEditSiswa.setOnClickListener {
                onEditClick(siswa)
            }

            binding.btnHapusSiswa.setOnClickListener {
                onDeleteClick(siswa)
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): SiswaViewHolder {
        val binding = ItemSiswaBinding.inflate(
            LayoutInflater.from(parent.context),
            parent,
            false
        )
        return SiswaViewHolder(binding)
    }

    override fun onBindViewHolder(holder: SiswaViewHolder, position: Int) {
        holder.bind(listSiswa[position])
    }

    override fun getItemCount(): Int = listSiswa.size

    fun updateData(newList: List<SiswaEntity>) {
        listSiswa.clear()
        listSiswa.addAll(newList)
        notifyDataSetChanged()
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/fragment/DataFragment.kt',
    name: 'DataFragment.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Fragment 3 - Room Database CRUD dengan 3 dummy data awal otomatis dan dialog form',
    content: `package com.fihan.kalkd.fragment

import android.app.AlertDialog
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.fihan.kalkd.R
import com.fihan.kalkd.adapter.SiswaAdapter
import com.fihan.kalkd.database.AppDatabase
import com.fihan.kalkd.database.SiswaEntity
import com.fihan.kalkd.databinding.DialogAddEditSiswaBinding
import com.fihan.kalkd.databinding.FragmentDataBinding
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class DataFragment : Fragment() {

    private var _binding: FragmentDataBinding? = null
    private val binding get() = _binding!!

    private lateinit var appDatabase: AppDatabase
    private lateinit var siswaAdapter: SiswaAdapter

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentDataBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        appDatabase = AppDatabase.getDatabase(requireContext())

        setupRecyclerView()
        checkAndSeedInitialData()

        binding.fabTambahSiswa.setOnClickListener {
            showAddEditDialog(null)
        }
    }

    private fun setupRecyclerView() {
        siswaAdapter = SiswaAdapter(
            mutableListOf(),
            onEditClick = { siswa -> showAddEditDialog(siswa) },
            onDeleteClick = { siswa -> showDeleteConfirmation(siswa) }
        )

        binding.rvSiswa.apply {
            layoutManager = LinearLayoutManager(requireContext())
            adapter = siswaAdapter
        }
    }

    private fun checkAndSeedInitialData() {
        lifecycleScope.launch(Dispatchers.IO) {
            val count = appDatabase.siswaDao().getCount()
            if (count == 0) {
                val dummy1 = SiswaEntity(
                    nama = "Ahmad Fauzi",
                    kelas = "XII RPL 1",
                    jurusan = "Rekayasa Perangkat Lunak",
                    nilai = 92.5
                )
                val dummy2 = SiswaEntity(
                    nama = "Siti Nurhaliza",
                    kelas = "XII RPL 2",
                    jurusan = "Rekayasa Perangkat Lunak",
                    nilai = 88.0
                )
                val dummy3 = SiswaEntity(
                    nama = "Budi Santoso",
                    kelas = "XII TKJ 1",
                    jurusan = "Teknik Komputer dan Jaringan",
                    nilai = 85.0
                )

                appDatabase.siswaDao().insertData(dummy1)
                appDatabase.siswaDao().insertData(dummy2)
                appDatabase.siswaDao().insertData(dummy3)
            }

            loadData()
        }
    }

    private fun loadData() {
        lifecycleScope.launch(Dispatchers.IO) {
            val dataList = appDatabase.siswaDao().getAllData()
            withContext(Dispatchers.Main) {
                siswaAdapter.updateData(dataList)
                binding.tvJumlahData.text = "Total: \${dataList.size} Siswa Terdaftar"
                if (dataList.isEmpty()) {
                    binding.tvEmptyState.visibility = View.VISIBLE
                    binding.rvSiswa.visibility = View.GONE
                } else {
                    binding.tvEmptyState.visibility = View.GONE
                    binding.rvSiswa.visibility = View.VISIBLE
                }
            }
        }
    }

    private fun showAddEditDialog(siswa: SiswaEntity?) {
        val dialogBinding = DialogAddEditSiswaBinding.inflate(layoutInflater)
        val isEdit = siswa != null

        if (isEdit) {
            dialogBinding.tvDialogTitle.text = getString(R.string.edit_siswa)
            dialogBinding.etDialogNama.setText(siswa!!.nama)
            dialogBinding.etDialogKelas.setText(siswa.kelas)
            dialogBinding.etDialogJurusan.setText(siswa.jurusan)
            dialogBinding.etDialogNilai.setText(siswa.nilai.toString())
        } else {
            dialogBinding.tvDialogTitle.text = getString(R.string.tambah_siswa)
        }

        val alertDialog = AlertDialog.Builder(requireContext())
            .setView(dialogBinding.root)
            .setPositiveButton(getString(R.string.simpan), null)
            .setNegativeButton(getString(R.string.batal)) { dialog, _ ->
                dialog.dismiss()
            }
            .create()

        alertDialog.setOnShowListener {
            val buttonSimpan = alertDialog.getButton(AlertDialog.BUTTON_POSITIVE)
            buttonSimpan.setOnClickListener {
                val nama = dialogBinding.etDialogNama.text.toString().trim()
                val kelas = dialogBinding.etDialogKelas.text.toString().trim()
                val jurusan = dialogBinding.etDialogJurusan.text.toString().trim()
                val nilaiStr = dialogBinding.etDialogNilai.text.toString().trim()

                var valid = true

                if (nama.isEmpty()) {
                    dialogBinding.tilDialogNama.error = getString(R.string.err_empty_field)
                    valid = false
                } else {
                    dialogBinding.tilDialogNama.error = null
                }

                if (kelas.isEmpty()) {
                    dialogBinding.tilDialogKelas.error = getString(R.string.err_empty_field)
                    valid = false
                } else {
                    dialogBinding.tilDialogKelas.error = null
                }

                if (jurusan.isEmpty()) {
                    dialogBinding.tilDialogJurusan.error = getString(R.string.err_empty_field)
                    valid = false
                } else {
                    dialogBinding.tilDialogJurusan.error = null
                }

                val nilai = nilaiStr.toDoubleOrNull()
                if (nilaiStr.isEmpty() || nilai == null || nilai < 0 || nilai > 100) {
                    dialogBinding.tilDialogNilai.error = "Masukkan nilai valid (0 - 100)"
                    valid = false
                } else {
                    dialogBinding.tilDialogNilai.error = null
                }

                if (valid && nilai != null) {
                    lifecycleScope.launch(Dispatchers.IO) {
                        if (isEdit) {
                            val updatedSiswa = SiswaEntity(
                                id = siswa!!.id,
                                nama = nama,
                                kelas = kelas,
                                jurusan = jurusan,
                                nilai = nilai
                            )
                            appDatabase.siswaDao().updateData(updatedSiswa)
                        } else {
                            val newSiswa = SiswaEntity(
                                nama = nama,
                                kelas = kelas,
                                jurusan = jurusan,
                                nilai = nilai
                            )
                            appDatabase.siswaDao().insertData(newSiswa)
                        }

                        withContext(Dispatchers.Main) {
                            Toast.makeText(
                                requireContext(),
                                if (isEdit) "Data siswa berhasil diubah" else "Data siswa berhasil ditambahkan",
                                Toast.LENGTH_SHORT
                            ).show()
                            loadData()
                            alertDialog.dismiss()
                        }
                    }
                }
            }
        }

        alertDialog.show()
    }

    private fun showDeleteConfirmation(siswa: SiswaEntity) {
        AlertDialog.Builder(requireContext())
            .setTitle(getString(R.string.hapus))
            .setMessage(getString(R.string.konfirmasi_hapus) + "\\n\\n" + siswa.nama)
            .setPositiveButton(getString(R.string.hapus)) { dialog, _ ->
                lifecycleScope.launch(Dispatchers.IO) {
                    appDatabase.siswaDao().deleteData(siswa)
                    withContext(Dispatchers.Main) {
                        Toast.makeText(requireContext(), "Data berhasil dihapus", Toast.LENGTH_SHORT).show()
                        loadData()
                    }
                }
                dialog.dismiss()
            }
            .setNegativeButton(getString(R.string.batal)) { dialog, _ ->
                dialog.dismiss()
            }
            .show()
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/api/UserApi.kt',
    name: 'UserApi.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Data class Gson untuk model response JSONPlaceholder /users',
    content: `package com.fihan.kalkd.api

import com.google.gson.annotations.SerializedName

data class UserApi(
    @SerializedName("id")
    val id: Int,

    @SerializedName("name")
    val name: String,

    @SerializedName("username")
    val username: String,

    @SerializedName("email")
    val email: String,

    @SerializedName("phone")
    val phone: String,

    @SerializedName("website")
    val website: String,

    @SerializedName("company")
    val company: Company,

    @SerializedName("address")
    val address: Address
)

data class Company(
    @SerializedName("name")
    val name: String,

    @SerializedName("catchPhrase")
    val catchPhrase: String,

    @SerializedName("bs")
    val bs: String
)

data class Address(
    @SerializedName("street")
    val street: String,

    @SerializedName("suite")
    val suite: String,

    @SerializedName("city")
    val city: String,

    @SerializedName("zipcode")
    val zipcode: String
)`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/api/ApiService.kt',
    name: 'ApiService.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Interface Retrofit dan Singleton RetrofitClient untuk JSONPlaceholder API',
    content: `package com.fihan.kalkd.api

import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET
import java.util.concurrent.TimeUnit

interface ApiService {

    @GET("users")
    fun getUsers(): Call<List<UserApi>>
}

object RetrofitClient {

    private const val BASE_URL = "https://jsonplaceholder.typicode.com/"

    private val loggingInterceptor = HttpLoggingInterceptor().apply {
        level = HttpLoggingInterceptor.Level.BODY
    }

    private val okHttpClient = OkHttpClient.Builder()
        .addInterceptor(loggingInterceptor)
        .connectTimeout(30, TimeUnit.SECONDS)
        .readTimeout(30, TimeUnit.SECONDS)
        .build()

    val instance: ApiService by lazy {
        val retrofit = Retrofit.Builder()
            .baseUrl(BASE_URL)
            .client(okHttpClient)
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        retrofit.create(ApiService::class.java)
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/adapter/UserApiAdapter.kt',
    name: 'UserApiAdapter.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Adapter RecyclerView untuk list pengguna dari Web API',
    content: `package com.fihan.kalkd.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.fihan.kalkd.api.UserApi
import com.fihan.kalkd.databinding.ItemUserApiBinding

class UserApiAdapter(
    private var listUser: MutableList<UserApi>
) : RecyclerView.Adapter<UserApiAdapter.UserViewHolder>() {

    inner class UserViewHolder(private val binding: ItemUserApiBinding) :
        RecyclerView.ViewHolder(binding.root) {

        fun bind(user: UserApi) {
            binding.tvApiUserName.text = user.name
            binding.tvApiUserUsername.text = "@" + user.username
            binding.tvApiUserEmail.text = "Email: " + user.email
            binding.tvApiUserPhone.text = "Telepon: " + user.phone
            binding.tvApiUserCompany.text = "Perusahaan: " + user.company.name
            binding.tvApiUserCity.text = "Kota: " + user.address.city
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): UserViewHolder {
        val binding = ItemUserApiBinding.inflate(
            LayoutInflater.from(parent.context),
            parent,
            false
        )
        return UserViewHolder(binding)
    }

    override fun onBindViewHolder(holder: UserViewHolder, position: Int) {
        holder.bind(listUser[position])
    }

    override fun getItemCount(): Int = listUser.size

    fun updateData(newList: List<UserApi>) {
        listUser.clear()
        listUser.addAll(newList)
        notifyDataSetChanged()
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/fragment/WebApiFragment.kt',
    name: 'WebApiFragment.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Fragment 4 - Retrofit Web API dengan ProgressBar dan penanganan error',
    content: `package com.fihan.kalkd.fragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import com.fihan.kalkd.adapter.UserApiAdapter
import com.fihan.kalkd.api.RetrofitClient
import com.fihan.kalkd.api.UserApi
import com.fihan.kalkd.databinding.FragmentWebApiBinding
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class WebApiFragment : Fragment() {

    private var _binding: FragmentWebApiBinding? = null
    private val binding get() = _binding!!
    private lateinit var userApiAdapter: UserApiAdapter

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentWebApiBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        setupRecyclerView()
        fetchDataUsers()

        binding.btnRetryApi.setOnClickListener {
            fetchDataUsers()
        }
    }

    private fun setupRecyclerView() {
        userApiAdapter = UserApiAdapter(mutableListOf())
        binding.rvUsersApi.apply {
            layoutManager = LinearLayoutManager(requireContext())
            adapter = userApiAdapter
        }
    }

    private fun fetchDataUsers() {
        binding.progressBarApi.visibility = View.VISIBLE
        binding.tvErrorApi.visibility = View.GONE
        binding.btnRetryApi.visibility = View.GONE
        binding.rvUsersApi.visibility = View.GONE

        RetrofitClient.instance.getUsers().enqueue(object : Callback<List<UserApi>> {
            override fun onResponse(
                call: Call<List<UserApi>>,
                response: Response<List<UserApi>>
            ) {
                if (_binding == null) return

                binding.progressBarApi.visibility = View.GONE

                if (response.isSuccessful && response.body() != null) {
                    val users = response.body()!!
                    userApiAdapter.updateData(users)
                    binding.rvUsersApi.visibility = View.VISIBLE
                } else {
                    binding.tvErrorApi.text = "Gagal memuat data (Kode: " + response.code() + ")"
                    binding.tvErrorApi.visibility = View.VISIBLE
                    binding.btnRetryApi.visibility = View.VISIBLE
                }
            }

            override fun onFailure(call: Call<List<UserApi>>, t: Throwable) {
                if (_binding == null) return

                binding.progressBarApi.visibility = View.GONE
                binding.tvErrorApi.text = "Koneksi gagal: " + (t.localizedMessage ?: "Periksa koneksi internet Anda")
                binding.tvErrorApi.visibility = View.VISIBLE
                binding.btnRetryApi.visibility = View.VISIBLE
            }
        })
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}`
  },
  {
    path: 'app/src/main/java/com/fihan/kalkd/fragment/ProfileFragment.kt',
    name: 'ProfileFragment.kt',
    language: 'kotlin',
    category: 'Kotlin Classes',
    description: 'Fragment 5 - Profil dengan CircleImageView, ActivityResultLauncher foto, edit session & logout',
    content: `package com.fihan.kalkd.fragment

import android.app.AlertDialog
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.fragment.app.Fragment
import com.fihan.kalkd.LoginActivity
import com.fihan.kalkd.R
import com.fihan.kalkd.databinding.DialogEditProfileBinding
import com.fihan.kalkd.databinding.FragmentProfileBinding
import com.fihan.kalkd.util.SessionManager

class ProfileFragment : Fragment() {

    private var _binding: FragmentProfileBinding? = null
    private val binding get() = _binding!!
    private lateinit var sessionManager: SessionManager

    private val selectImageLauncher: ActivityResultLauncher<String> =
        registerForActivityResult(ActivityResultContracts.GetContent()) { uri: Uri? ->
            uri?.let {
                binding.imgProfile.setImageURI(it)
                sessionManager.saveImageUri(it.toString())
                Toast.makeText(requireContext(), "Foto profil berhasil diperbarui", Toast.LENGTH_SHORT).show()
            }
        }

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentProfileBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        sessionManager = SessionManager(requireContext())

        displayUserData()

        binding.fabChangePhoto.setOnClickListener {
            selectImageLauncher.launch("image/*")
        }

        binding.btnEditProfile.setOnClickListener {
            showEditProfileDialog()
        }

        binding.btnLogout.setOnClickListener {
            showLogoutConfirmation()
        }
    }

    private fun displayUserData() {
        binding.tvProfileNama.text = sessionManager.getNama()
        binding.tvProfileUsername.text = "@" + sessionManager.getUsername()
        binding.tvProfileEmail.text = sessionManager.getEmail()
        binding.tvProfileKelas.text = sessionManager.getKelas()
        binding.tvProfileJurusan.text = sessionManager.getJurusan()

        val savedImageUri = sessionManager.getImageUri()
        if (!savedImageUri.isNullOrEmpty()) {
            try {
                binding.imgProfile.setImageURI(Uri.parse(savedImageUri))
            } catch (e: Exception) {
                binding.imgProfile.setImageResource(R.drawable.ic_person)
            }
        } else {
            binding.imgProfile.setImageResource(R.drawable.ic_person)
        }
    }

    private fun showEditProfileDialog() {
        val dialogBinding = DialogEditProfileBinding.inflate(layoutInflater)
        dialogBinding.etEditNama.setText(sessionManager.getNama())
        dialogBinding.etEditKelas.setText(sessionManager.getKelas())
        dialogBinding.etEditJurusan.setText(sessionManager.getJurusan())

        val alertDialog = AlertDialog.Builder(requireContext())
            .setView(dialogBinding.root)
            .setPositiveButton(getString(R.string.simpan), null)
            .setNegativeButton(getString(R.string.batal)) { dialog, _ ->
                dialog.dismiss()
            }
            .create()

        alertDialog.setOnShowListener {
            val buttonSimpan = alertDialog.getButton(AlertDialog.BUTTON_POSITIVE)
            buttonSimpan.setOnClickListener {
                val nama = dialogBinding.etEditNama.text.toString().trim()
                val kelas = dialogBinding.etEditKelas.text.toString().trim()
                val jurusan = dialogBinding.etEditJurusan.text.toString().trim()

                var valid = true

                if (nama.isEmpty()) {
                    dialogBinding.tilEditNama.error = getString(R.string.err_empty_field)
                    valid = false
                } else {
                    dialogBinding.tilEditNama.error = null
                }

                if (kelas.isEmpty()) {
                    dialogBinding.tilEditKelas.error = getString(R.string.err_empty_field)
                    valid = false
                } else {
                    dialogBinding.tilEditKelas.error = null
                }

                if (jurusan.isEmpty()) {
                    dialogBinding.tilEditJurusan.error = getString(R.string.err_empty_field)
                    valid = false
                } else {
                    dialogBinding.tilEditJurusan.error = null
                }

                if (valid) {
                    sessionManager.updateProfile(nama, kelas, jurusan)
                    displayUserData()
                    Toast.makeText(requireContext(), "Profil berhasil diperbarui", Toast.LENGTH_SHORT).show()
                    alertDialog.dismiss()
                }
            }
        }

        alertDialog.show()
    }

    private fun showLogoutConfirmation() {
        AlertDialog.Builder(requireContext())
            .setTitle(getString(R.string.btn_logout))
            .setMessage(getString(R.string.konfirmasi_logout))
            .setPositiveButton("Ya, Logout") { dialog, _ ->
                sessionManager.logout()
                Toast.makeText(requireContext(), "Berhasil logout", Toast.LENGTH_SHORT).show()

                val intent = Intent(requireContext(), LoginActivity::class.java).apply {
                    flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
                }
                startActivity(intent)
                requireActivity().finish()
                dialog.dismiss()
            }
            .setNegativeButton(getString(R.string.batal)) { dialog, _ ->
                dialog.dismiss()
            }
            .show()
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}`
  }
];
