import React, { useState, useEffect } from 'react';
import {
  Home,
  Calculator,
  Database,
  Globe,
  User,
  Plus,
  Edit2,
  Trash2,
  RefreshCw,
  LogOut,
  Camera,
  ArrowRight
} from 'lucide-react';

interface SiswaItem {
  id: number;
  nama: string;
  kelas: string;
  jurusan: string;
  nilai: number;
}

interface UserApiItem {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

interface SessionData {
  isLoggedIn: boolean;
  username: string;
  email: string;
  nama: string;
  kelas: string;
  jurusan: string;
  imageUri: string | null;
}

const INITIAL_DUMMY_SISWA: SiswaItem[] = [
  {
    id: 1,
    nama: 'Ahmad Fauzi',
    kelas: 'XII RPL 1',
    jurusan: 'Rekayasa Perangkat Lunak',
    nilai: 92.5
  },
  {
    id: 2,
    nama: 'Siti Nurhaliza',
    kelas: 'XII RPL 2',
    jurusan: 'Rekayasa Perangkat Lunak',
    nilai: 88.0
  },
  {
    id: 3,
    nama: 'Budi Santoso',
    kelas: 'XII TKJ 1',
    jurusan: 'Teknik Komputer dan Jaringan',
    nilai: 85.0
  }
];

export default function App() {
  // Activity / Screen Navigation State
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'login' | 'main'>('splash');
  const [bottomNavTab, setBottomNavTab] = useState<'home' | 'kalkulator' | 'data' | 'api' | 'profile'>('home');

  // Session Manager Simulation
  const [session, setSession] = useState<SessionData>(() => {
    const saved = localStorage.getItem('kalkd_session');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    return {
      isLoggedIn: false,
      username: '',
      email: '',
      nama: '',
      kelas: '',
      jurusan: '',
      imageUri: null
    };
  });

  // Login Form
  const [loginForm, setLoginForm] = useState({
    username: '',
    email: '',
    password: '',
    nama: '',
    kelas: '',
    jurusan: ''
  });
  const [loginErrors, setLoginErrors] = useState<{ [key: string]: string }>({});

  // Kalkulator Form & State
  const [angka1, setAngka1] = useState('');
  const [angka2, setAngka2] = useState('');
  const [kalkulatorHasil, setKalkulatorHasil] = useState('0');
  const [kalkulatorError, setKalkulatorError] = useState('');

  // Room Database (Local CRUD)
  const [siswaList, setSiswaList] = useState<SiswaItem[]>(() => {
    const saved = localStorage.getItem('kalkd_room_siswa');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch {
        // ignore
      }
    }
    return INITIAL_DUMMY_SISWA;
  });
  const [dataSearch, setDataSearch] = useState('');
  const [siswaDialogMode, setSiswaDialogMode] = useState<'add' | 'edit' | null>(null);
  const [editingSiswa, setEditingSiswa] = useState<SiswaItem | null>(null);
  const [siswaForm, setSiswaForm] = useState({
    nama: '',
    kelas: '',
    jurusan: '',
    nilai: ''
  });
  const [siswaFormError, setSiswaFormError] = useState<{ [key: string]: string }>({});
  const [deleteConfirmSiswa, setDeleteConfirmSiswa] = useState<SiswaItem | null>(null);

  // Web API (Retrofit Simulation fetching live from jsonplaceholder.typicode.com/users)
  const [apiUsers, setApiUsers] = useState<UserApiItem[]>([]);
  const [apiLoading, setApiLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Profile Dialogs
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [profileForm, setProfileForm] = useState({ nama: '', kelas: '', jurusan: '' });
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);

  // Splash Screen Delay 2s
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        if (session.isLoggedIn) {
          setCurrentScreen('main');
        } else {
          setCurrentScreen('login');
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen, session.isLoggedIn]);

  // Persist session
  useEffect(() => {
    localStorage.setItem('kalkd_session', JSON.stringify(session));
  }, [session]);

  // Persist room DB
  useEffect(() => {
    localStorage.setItem('kalkd_room_siswa', JSON.stringify(siswaList));
  }, [siswaList]);

  // Fetch real Web API users live from https://jsonplaceholder.typicode.com/users
  useEffect(() => {
    fetchUsersApi();
  }, []);

  const fetchUsersApi = async () => {
    setApiLoading(true);
    setApiError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) {
        throw new Error('Gagal mengambil data dari server. Kode status: ' + res.status);
      }
      const data: UserApiItem[] = await res.json();
      setApiUsers(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Koneksi ke server API gagal';
      setApiError(msg);
    } finally {
      setApiLoading(false);
    }
  };

  // Kalkulator Logic
  const handleHitung = (op: '+' | '-' | '*' | '/') => {
    setKalkulatorError('');
    if (!angka1.trim() || !angka2.trim()) {
      setKalkulatorError('Silakan masukkan kedua angka');
      return;
    }
    const val1 = parseFloat(angka1);
    const val2 = parseFloat(angka2);
    if (isNaN(val1) || isNaN(val2)) {
      setKalkulatorError('Input angka tidak valid');
      return;
    }
    if (op === '/' && val2 === 0) {
      setKalkulatorError('Tidak dapat membagi angka dengan nol (0)');
      setKalkulatorHasil('Error');
      return;
    }

    let res = 0;
    if (op === '+') res = val1 + val2;
    if (op === '-') res = val1 - val2;
    if (op === '*') res = val1 * val2;
    if (op === '/') res = val1 / val2;

    const formatted = parseFloat(res.toFixed(6)).toString();
    setKalkulatorHasil(formatted);
  };

  // Login Submit
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};
    if (!loginForm.username.trim()) errors.username = 'Username tidak boleh kosong';
    if (!loginForm.email.trim()) {
      errors.email = 'Email tidak boleh kosong';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) {
      errors.email = 'Format email tidak valid';
    }
    if (!loginForm.password.trim()) errors.password = 'Password tidak boleh kosong';
    if (!loginForm.nama.trim()) errors.nama = 'Nama lengkap tidak boleh kosong';
    if (!loginForm.kelas.trim()) errors.kelas = 'Kelas tidak boleh kosong';
    if (!loginForm.jurusan.trim()) errors.jurusan = 'Jurusan tidak boleh kosong';

    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }

    setLoginErrors({});
    const newSession: SessionData = {
      isLoggedIn: true,
      username: loginForm.username.trim(),
      email: loginForm.email.trim(),
      nama: loginForm.nama.trim(),
      kelas: loginForm.kelas.trim(),
      jurusan: loginForm.jurusan.trim(),
      imageUri: null
    };
    setSession(newSession);
    setCurrentScreen('main');
    setBottomNavTab('home');
  };

  // Siswa Submit (Room DB)
  const handleSiswaSubmit = () => {
    const errors: { [key: string]: string } = {};
    if (!siswaForm.nama.trim()) errors.nama = 'Nama siswa wajib diisi';
    if (!siswaForm.kelas.trim()) errors.kelas = 'Kelas wajib diisi';
    if (!siswaForm.jurusan.trim()) errors.jurusan = 'Jurusan wajib diisi';

    const nilaiNum = parseFloat(siswaForm.nilai);
    if (!siswaForm.nilai.trim() || isNaN(nilaiNum) || nilaiNum < 0 || nilaiNum > 100) {
      errors.nilai = 'Nilai harus di antara 0 dan 100';
    }

    if (Object.keys(errors).length > 0) {
      setSiswaFormError(errors);
      return;
    }

    setSiswaFormError({});

    if (siswaDialogMode === 'add') {
      const newSiswa: SiswaItem = {
        id: Date.now(),
        nama: siswaForm.nama.trim(),
        kelas: siswaForm.kelas.trim(),
        jurusan: siswaForm.jurusan.trim(),
        nilai: nilaiNum
      };
      setSiswaList([newSiswa, ...siswaList]);
    } else if (siswaDialogMode === 'edit' && editingSiswa) {
      const updated = siswaList.map((s) =>
        s.id === editingSiswa.id
          ? {
              ...s,
              nama: siswaForm.nama.trim(),
              kelas: siswaForm.kelas.trim(),
              jurusan: siswaForm.jurusan.trim(),
              nilai: nilaiNum
            }
          : s
      );
      setSiswaList(updated);
    }

    setSiswaDialogMode(null);
    setEditingSiswa(null);
  };

  const handleOpenEditSiswa = (item: SiswaItem) => {
    setEditingSiswa(item);
    setSiswaForm({
      nama: item.nama,
      kelas: item.kelas,
      jurusan: item.jurusan,
      nilai: item.nilai.toString()
    });
    setSiswaFormError({});
    setSiswaDialogMode('edit');
  };

  const handleDeleteSiswaConfirm = () => {
    if (deleteConfirmSiswa) {
      setSiswaList(siswaList.filter((s) => s.id !== deleteConfirmSiswa.id));
      setDeleteConfirmSiswa(null);
    }
  };

  const handleOpenEditProfile = () => {
    setProfileForm({
      nama: session.nama,
      kelas: session.kelas,
      jurusan: session.jurusan
    });
    setIsEditProfileOpen(true);
  };

  const handleSaveProfile = () => {
    if (!profileForm.nama.trim() || !profileForm.kelas.trim() || !profileForm.jurusan.trim()) {
      return;
    }
    setSession({
      ...session,
      nama: profileForm.nama.trim(),
      kelas: profileForm.kelas.trim(),
      jurusan: profileForm.jurusan.trim()
    });
    setIsEditProfileOpen(false);
  };

  const handleLogout = () => {
    setSession({
      isLoggedIn: false,
      username: '',
      email: '',
      nama: '',
      kelas: '',
      jurusan: '',
      imageUri: null
    });
    setIsLogoutConfirmOpen(false);
    setCurrentScreen('login');
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSession((prev) => ({
          ...prev,
          imageUri: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredSiswa = siswaList.filter(
    (s) =>
      s.nama.toLowerCase().includes(dataSearch.toLowerCase()) ||
      s.kelas.toLowerCase().includes(dataSearch.toLowerCase()) ||
      s.jurusan.toLowerCase().includes(dataSearch.toLowerCase())
  );

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-900 font-sans overflow-hidden p-0 sm:p-4">
      {/* Mobile Device Container */}
      <div className="relative flex h-full w-full sm:h-[760px] sm:w-[380px] sm:max-h-[96vh] sm:rounded-[42px] bg-slate-950 p-0 sm:p-3 sm:shadow-2xl sm:border-4 sm:border-slate-700 flex-col overflow-hidden">
        {/* Device Front Camera / Punch Hole (hanya pada tampilan desktop frame) */}
        <div className="hidden sm:flex absolute top-4 left-1/2 -translate-x-1/2 items-center space-x-2 z-30">
          <div className="h-1 w-10 rounded-full bg-slate-800" />
          <div className="h-3 w-3 rounded-full bg-slate-900 border border-slate-700" />
        </div>

        {/* Inner Phone Display */}
        <div className="relative flex-1 w-full sm:rounded-[32px] overflow-hidden bg-slate-100 text-slate-900 flex flex-col select-none">
          {/* Status Bar */}
          <div className="flex h-7 w-full items-center justify-between px-5 pt-1 text-[11px] font-semibold text-slate-700 shrink-0 bg-transparent z-20">
            <span>09:41</span>
            <div className="flex items-center space-x-1.5 text-[10px]">
              <span>LTE</span>
              <span>100%</span>
            </div>
          </div>

          {/* SCREEN 1: SPLASH SCREEN */}
          {currentScreen === 'splash' && (
            <div className="flex flex-1 flex-col items-center justify-center bg-blue-900 text-white p-6 relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-blue-600 shadow-xl mb-4">
                <span className="text-3xl font-extrabold tracking-tight">KalkD</span>
              </div>
              <h1 className="text-2xl font-bold tracking-wide">KalkD</h1>
              <p className="text-xs text-blue-200 mt-1 text-center">
                Aplikasi Siswa, Kalkulator dan Data API
              </p>

              <div className="mt-8 flex flex-col items-center">
                <div className="h-7 w-7 animate-spin rounded-full border-2 border-white border-t-transparent" />
                <button
                  onClick={() => setCurrentScreen(session.isLoggedIn ? 'main' : 'login')}
                  className="mt-6 text-xs text-blue-200 underline hover:text-white"
                >
                  Lewati Splash
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 2: LOGIN ACTIVITY */}
          {currentScreen === 'login' && (
            <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50 p-5">
              <div className="mt-1 mb-4">
                <h2 className="text-xl font-bold text-slate-900">Masuk ke KalkD</h2>
                <p className="text-xs text-slate-500">Silakan lengkapi formulir akun Anda</p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-2.5">
                <div>
                  <label className="text-[11px] font-semibold text-slate-700">Username</label>
                  <input
                    type="text"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                    placeholder="Masukkan username"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                  />
                  {loginErrors.username && (
                    <p className="text-[10px] text-red-500 mt-0.5">{loginErrors.username}</p>
                  )}
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-700">Email</label>
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    placeholder="nama@email.com"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                  />
                  {loginErrors.email && (
                    <p className="text-[10px] text-red-500 mt-0.5">{loginErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-700">Password</label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    placeholder="Minimal 6 karakter"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                  />
                  {loginErrors.password && (
                    <p className="text-[10px] text-red-500 mt-0.5">{loginErrors.password}</p>
                  )}
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-700">Nama Lengkap</label>
                  <input
                    type="text"
                    value={loginForm.nama}
                    onChange={(e) => setLoginForm({ ...loginForm, nama: e.target.value })}
                    placeholder="Nama lengkap siswa"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                  />
                  {loginErrors.nama && (
                    <p className="text-[10px] text-red-500 mt-0.5">{loginErrors.nama}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700">Kelas</label>
                    <input
                      type="text"
                      value={loginForm.kelas}
                      onChange={(e) => setLoginForm({ ...loginForm, kelas: e.target.value })}
                      placeholder="XII RPL 1"
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                    />
                    {loginErrors.kelas && (
                      <p className="text-[10px] text-red-500 mt-0.5">{loginErrors.kelas}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-700">Jurusan</label>
                    <input
                      type="text"
                      value={loginForm.jurusan}
                      onChange={(e) => setLoginForm({ ...loginForm, jurusan: e.target.value })}
                      placeholder="RPL / TKJ"
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                    />
                    {loginErrors.jurusan && (
                      <p className="text-[10px] text-red-500 mt-0.5">{loginErrors.jurusan}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-900 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-800 transition-colors mt-3"
                >
                  Masuk ke Aplikasi
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setLoginForm({
                        username: 'fihan',
                        email: 'fihan@example.com',
                        password: 'password123',
                        nama: 'Fihan Shecilia',
                        kelas: 'XII RPL 1',
                        jurusan: 'Rekayasa Perangkat Lunak'
                      });
                    }}
                    className="text-[10px] text-blue-700 underline"
                  >
                    Gunakan Data Contoh
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* SCREEN 3: MAIN ACTIVITY */}
          {currentScreen === 'main' && (
            <div className="flex flex-1 flex-col overflow-hidden bg-slate-50">
              {/* App Bar */}
              <div className="flex h-11 items-center justify-between border-b border-slate-200 bg-white px-4 shrink-0 shadow-xs">
                <span className="font-bold text-sm text-slate-800">
                  {bottomNavTab === 'home' && 'Home KalkD'}
                  {bottomNavTab === 'kalkulator' && 'Kalkulator Aritmatika'}
                  {bottomNavTab === 'data' && 'Data Siswa (Room DB)'}
                  {bottomNavTab === 'api' && 'Pengguna Web API'}
                  {bottomNavTab === 'profile' && 'Profil Pengguna'}
                </span>
                <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-800">
                  {session.username || 'User'}
                </span>
              </div>

              {/* Fragment Body */}
              <div className="flex-1 overflow-y-auto p-4">
                {/* 1. HOME FRAGMENT */}
                {bottomNavTab === 'home' && (
                  <div className="space-y-3.5">
                    <div className="rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 p-4 text-white shadow-md">
                      <span className="text-xs text-blue-200 font-medium">Selamat Datang,</span>
                      <h3 className="text-lg font-bold mt-0.5 leading-snug">
                        {session.nama || 'Pengguna KalkD'}
                      </h3>
                      <p className="text-xs text-blue-100 mt-1">
                        {session.kelas || '-'} | {session.jurusan || '-'}
                      </p>
                    </div>

                    <div className="pt-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Fitur Utama
                      </h4>

                      <div className="space-y-2">
                        <div
                          onClick={() => setBottomNavTab('kalkulator')}
                          className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-xs hover:border-blue-400 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                              <Calculator className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-900">Kalkulator</p>
                              <p className="text-[10px] text-slate-500">Operasi hitung matematika dasar</p>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>

                        <div
                          onClick={() => setBottomNavTab('data')}
                          className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-xs hover:border-blue-400 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                              <Database className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-900">Data Siswa (Room DB)</p>
                              <p className="text-[10px] text-slate-500">
                                {siswaList.length} data siswa tersimpan
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>

                        <div
                          onClick={() => setBottomNavTab('api')}
                          className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-xs hover:border-blue-400 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                              <Globe className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-900">Web API Retrofit</p>
                              <p className="text-[10px] text-slate-500">
                                Data asli dari JSONPlaceholder /users
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. KALKULATOR FRAGMENT */}
                {bottomNavTab === 'kalkulator' && (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div>
                        <label className="text-[11px] font-semibold text-slate-700">Angka Pertama</label>
                        <input
                          type="number"
                          value={angka1}
                          onChange={(e) => setAngka1(e.target.value)}
                          placeholder="Masukkan angka pertama"
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-slate-700">Angka Kedua</label>
                        <input
                          type="number"
                          value={angka2}
                          onChange={(e) => setAngka2(e.target.value)}
                          placeholder="Masukkan angka kedua"
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                        />
                      </div>
                    </div>

                    {kalkulatorError && (
                      <div className="rounded-md bg-red-50 p-2 border border-red-200 text-[11px] font-medium text-red-600">
                        {kalkulatorError}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => handleHitung('+')}
                        className="rounded-lg bg-blue-900 py-3 text-base font-bold text-white shadow-xs hover:bg-blue-800 transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleHitung('-')}
                        className="rounded-lg bg-blue-900 py-3 text-base font-bold text-white shadow-xs hover:bg-blue-800 transition-colors"
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleHitung('*')}
                        className="rounded-lg bg-blue-900 py-3 text-base font-bold text-white shadow-xs hover:bg-blue-800 transition-colors"
                      >
                        *
                      </button>
                      <button
                        onClick={() => handleHitung('/')}
                        className="rounded-lg bg-blue-900 py-3 text-base font-bold text-white shadow-xs hover:bg-blue-800 transition-colors"
                      >
                        /
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setAngka1('');
                        setAngka2('');
                        setKalkulatorHasil('0');
                        setKalkulatorError('');
                      }}
                      className="w-full rounded-lg border border-red-300 bg-white py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Reset Perhitungan
                    </button>

                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs mt-2">
                      <span className="text-[11px] text-slate-500 font-medium">Hasil Perhitungan:</span>
                      <div className="text-2xl font-bold text-blue-900 mt-1 tracking-tight">
                        {kalkulatorHasil}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. DATA FRAGMENT (ROOM DB CRUD) */}
                {bottomNavTab === 'data' && (
                  <div className="space-y-3 pb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-800">Daftar Siswa</p>
                        <p className="text-[10px] text-slate-500">{siswaList.length} data tersimpan</p>
                      </div>
                      <button
                        onClick={() => {
                          setEditingSiswa(null);
                          setSiswaForm({ nama: '', kelas: '', jurusan: '', nilai: '' });
                          setSiswaFormError({});
                          setSiswaDialogMode('add');
                        }}
                        className="flex items-center space-x-1 rounded-md bg-blue-900 px-2.5 py-1 text-xs font-semibold text-white shadow-xs hover:bg-blue-800"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Tambah</span>
                      </button>
                    </div>

                    <input
                      type="text"
                      value={dataSearch}
                      onChange={(e) => setDataSearch(e.target.value)}
                      placeholder="Cari nama atau kelas..."
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                    />

                    <div className="space-y-2">
                      {filteredSiswa.length === 0 ? (
                        <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-xs text-slate-400">
                          Tidak ada data siswa ditemukan
                        </div>
                      ) : (
                        filteredSiswa.map((item) => (
                          <div
                            key={item.id}
                            className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs space-y-1.5"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <h5 className="text-xs font-bold text-slate-900">{item.nama}</h5>
                                <p className="text-[11px] text-slate-600">Kelas: {item.kelas}</p>
                                <p className="text-[10px] text-slate-500">Jurusan: {item.jurusan}</p>
                              </div>
                              <span className="rounded bg-blue-100 px-2 py-0.5 text-[11px] font-bold text-blue-800">
                                Nilai: {item.nilai}
                              </span>
                            </div>

                            <div className="flex justify-end space-x-2 pt-1 border-t border-slate-100">
                              <button
                                onClick={() => handleOpenEditSiswa(item)}
                                className="flex items-center space-x-1 text-[11px] font-semibold text-blue-700 hover:text-blue-900"
                              >
                                <Edit2 className="h-3 w-3" />
                                <span>Edit</span>
                              </button>
                              <button
                                onClick={() => setDeleteConfirmSiswa(item)}
                                className="flex items-center space-x-1 text-[11px] font-semibold text-red-600 hover:text-red-800"
                              >
                                <Trash2 className="h-3 w-3" />
                                <span>Hapus</span>
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}

                {/* 4. WEB API FRAGMENT (REAL SOURCE DATA) */}
                {bottomNavTab === 'api' && (
                  <div className="space-y-3 pb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-800">Daftar Pengguna Online</p>
                        <p className="text-[10px] text-slate-500">
                          Sumber Asli: jsonplaceholder.typicode.com/users
                        </p>
                      </div>
                      <button
                        onClick={fetchUsersApi}
                        disabled={apiLoading}
                        className="flex items-center space-x-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        <RefreshCw className={`h-3 w-3 ${apiLoading ? 'animate-spin' : ''}`} />
                        <span>Refresh</span>
                      </button>
                    </div>

                    {apiLoading && (
                      <div className="py-10 text-center">
                        <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-blue-900 border-t-transparent" />
                        <p className="text-xs text-slate-500 mt-2">Mengambil data asli dari server...</p>
                      </div>
                    )}

                    {apiError && (
                      <div className="rounded-lg bg-red-50 p-3 border border-red-200 text-center">
                        <p className="text-xs text-red-600 font-medium">{apiError}</p>
                        <button
                          onClick={fetchUsersApi}
                          className="mt-2 text-xs font-bold text-blue-900 underline"
                        >
                          Coba Lagi
                        </button>
                      </div>
                    )}

                    {!apiLoading && !apiError && (
                      <div className="space-y-2">
                        {apiUsers.map((user) => (
                          <div
                            key={user.id}
                            className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs space-y-1"
                          >
                            <div className="flex items-baseline justify-between">
                              <h5 className="text-xs font-bold text-slate-900">{user.name}</h5>
                              <span className="text-[10px] text-blue-700 font-mono">@{user.username}</span>
                            </div>
                            <p className="text-[11px] text-slate-600">Email: {user.email}</p>
                            <p className="text-[10px] text-slate-500">Telepon: {user.phone}</p>
                            <p className="text-[10px] text-slate-500">
                              Perusahaan: {user.company?.name || '-'} | Kota: {user.address?.city || '-'}
                            </p>
                            <p className="text-[10px] text-slate-400">Website: {user.website}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 5. PROFIL FRAGMENT */}
                {bottomNavTab === 'profile' && (
                  <div className="flex flex-col items-center space-y-3 pb-8">
                    <div className="relative mt-2">
                      <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-blue-900 bg-slate-200 shadow-md flex items-center justify-center">
                        {session.imageUri ? (
                          <img
                            src={session.imageUri}
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <User className="h-10 w-10 text-slate-400" />
                        )}
                      </div>
                      <label className="absolute bottom-0 right-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-blue-900 text-white shadow-md hover:bg-blue-800">
                        <Camera className="h-3.5 w-3.5" />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="text-center">
                      <h4 className="text-sm font-bold text-slate-900">
                        {session.nama || 'Nama Pengguna'}
                      </h4>
                      <p className="text-xs text-blue-700">@{session.username || 'username'}</p>
                    </div>

                    <div className="w-full rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs space-y-2.5 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Email</span>
                        <p className="font-semibold text-slate-800">{session.email || '-'}</p>
                      </div>
                      <div className="border-t border-slate-100 pt-2">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Kelas</span>
                        <p className="font-semibold text-slate-800">{session.kelas || '-'}</p>
                      </div>
                      <div className="border-t border-slate-100 pt-2">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Jurusan</span>
                        <p className="font-semibold text-slate-800">{session.jurusan || '-'}</p>
                      </div>
                    </div>

                    <div className="w-full space-y-2 pt-2">
                      <button
                        onClick={handleOpenEditProfile}
                        className="w-full rounded-lg bg-blue-900 py-2 text-xs font-semibold text-white shadow-xs hover:bg-blue-800"
                      >
                        Edit Profil
                      </button>
                      <button
                        onClick={() => setIsLogoutConfirmOpen(true)}
                        className="w-full rounded-lg border border-red-300 bg-white py-2 text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center justify-center space-x-1.5"
                      >
                        <LogOut className="h-3.5 w-3.5" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Navigation */}
              <div className="flex h-14 w-full items-center justify-around border-t border-slate-200 bg-white px-2 shrink-0">
                <button
                  onClick={() => setBottomNavTab('home')}
                  className={`flex flex-col items-center justify-center py-1 transition-colors ${
                    bottomNavTab === 'home' ? 'text-blue-900 font-bold' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Home className="h-5 w-5" />
                  <span className="text-[9px] mt-0.5">Home</span>
                </button>

                <button
                  onClick={() => setBottomNavTab('kalkulator')}
                  className={`flex flex-col items-center justify-center py-1 transition-colors ${
                    bottomNavTab === 'kalkulator' ? 'text-blue-900 font-bold' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Calculator className="h-5 w-5" />
                  <span className="text-[9px] mt-0.5">Kalkulator</span>
                </button>

                <button
                  onClick={() => setBottomNavTab('data')}
                  className={`flex flex-col items-center justify-center py-1 transition-colors ${
                    bottomNavTab === 'data' ? 'text-blue-900 font-bold' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Database className="h-5 w-5" />
                  <span className="text-[9px] mt-0.5">Data</span>
                </button>

                <button
                  onClick={() => setBottomNavTab('api')}
                  className={`flex flex-col items-center justify-center py-1 transition-colors ${
                    bottomNavTab === 'api' ? 'text-blue-900 font-bold' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Globe className="h-5 w-5" />
                  <span className="text-[9px] mt-0.5">Web API</span>
                </button>

                <button
                  onClick={() => setBottomNavTab('profile')}
                  className={`flex flex-col items-center justify-center py-1 transition-colors ${
                    bottomNavTab === 'profile' ? 'text-blue-900 font-bold' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span className="text-[9px] mt-0.5">Profil</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Dialog: Add/Edit Siswa */}
      {siswaDialogMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 text-slate-900 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900">
              {siswaDialogMode === 'add' ? 'Tambah Data Siswa' : 'Edit Data Siswa'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Tersimpan permanen di database Room</p>

            <div className="mt-4 space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-700">Nama Siswa</label>
                <input
                  type="text"
                  value={siswaForm.nama}
                  onChange={(e) => setSiswaForm({ ...siswaForm, nama: e.target.value })}
                  placeholder="Contoh: Ahmad Fauzi"
                  className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                />
                {siswaFormError.nama && (
                  <p className="text-[10px] text-red-500 mt-0.5">{siswaFormError.nama}</p>
                )}
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-700">Kelas</label>
                <input
                  type="text"
                  value={siswaForm.kelas}
                  onChange={(e) => setSiswaForm({ ...siswaForm, kelas: e.target.value })}
                  placeholder="Contoh: XII RPL 1"
                  className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                />
                {siswaFormError.kelas && (
                  <p className="text-[10px] text-red-500 mt-0.5">{siswaFormError.kelas}</p>
                )}
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-700">Jurusan</label>
                <input
                  type="text"
                  value={siswaForm.jurusan}
                  onChange={(e) => setSiswaForm({ ...siswaForm, jurusan: e.target.value })}
                  placeholder="Contoh: Rekayasa Perangkat Lunak"
                  className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                />
                {siswaFormError.jurusan && (
                  <p className="text-[10px] text-red-500 mt-0.5">{siswaFormError.jurusan}</p>
                )}
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-700">Nilai (0 - 100)</label>
                <input
                  type="number"
                  value={siswaForm.nilai}
                  onChange={(e) => setSiswaForm({ ...siswaForm, nilai: e.target.value })}
                  placeholder="Contoh: 90"
                  className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                />
                {siswaFormError.nilai && (
                  <p className="text-[10px] text-red-500 mt-0.5">{siswaFormError.nilai}</p>
                )}
              </div>
            </div>

            <div className="mt-5 flex justify-end space-x-2">
              <button
                onClick={() => setSiswaDialogMode(null)}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Batal
              </button>
              <button
                onClick={handleSiswaSubmit}
                className="rounded-md bg-blue-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-800"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Dialog: Delete Confirmation */}
      {deleteConfirmSiswa && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-xs rounded-2xl bg-white p-5 text-slate-900 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900">Hapus Data Siswa</h3>
            <p className="text-xs text-slate-600 mt-2">
              Apakah Anda yakin ingin menghapus data siswa <strong>{deleteConfirmSiswa.nama}</strong>?
            </p>

            <div className="mt-5 flex justify-end space-x-2">
              <button
                onClick={() => setDeleteConfirmSiswa(null)}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Batal
              </button>
              <button
                onClick={handleDeleteSiswaConfirm}
                className="rounded-md bg-red-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-red-700"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Dialog: Edit Profile */}
      {isEditProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 text-slate-900 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900">Perbarui Data Profil</h3>
            <p className="text-xs text-slate-500 mt-0.5">Memperbarui sesi SharedPreferences</p>

            <div className="mt-4 space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-700">Nama Lengkap</label>
                <input
                  type="text"
                  value={profileForm.nama}
                  onChange={(e) => setProfileForm({ ...profileForm, nama: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-700">Kelas</label>
                <input
                  type="text"
                  value={profileForm.kelas}
                  onChange={(e) => setProfileForm({ ...profileForm, kelas: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-700">Jurusan</label>
                <input
                  type="text"
                  value={profileForm.jurusan}
                  onChange={(e) => setProfileForm({ ...profileForm, jurusan: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-xs text-slate-900 focus:border-blue-900 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-end space-x-2">
              <button
                onClick={() => setIsEditProfileOpen(false)}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Batal
              </button>
              <button
                onClick={handleSaveProfile}
                className="rounded-md bg-blue-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-800"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Dialog: Logout Confirmation */}
      {isLogoutConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-xs rounded-2xl bg-white p-5 text-slate-900 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900">Konfirmasi Logout</h3>
            <p className="text-xs text-slate-600 mt-2">
              Apakah Anda yakin ingin keluar dari akun ini? Semua data sesi akan dihapus.
            </p>

            <div className="mt-5 flex justify-end space-x-2">
              <button
                onClick={() => setIsLogoutConfirmOpen(false)}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                className="rounded-md bg-red-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
