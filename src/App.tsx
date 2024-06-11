import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AuthenticatedApp from './AuthenticatedApp';
import Spinner from './components/spinner/Spinner';
import { useAuth } from './contexts/AuthContext';
import { Login } from './pages';
import BasicLogin from './pages/auth/BasicLoginForm';
import { LoginConfig } from './pages/auth/LoginConfigForm';
import baseUrl from './utils/Util';

export default function App() {
  const { isAuthenticated, isInitialized } = useAuth();
  const [loginConfig, setLoginConfig] = useState<LoginConfig>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/gts/v1/api/base/login-page-info/fetch`).then((res) => {
      const result: any = res.data.result;
      if (result && result.length) {
        setLoginConfig(res.data.result[0]);
      }
      setLoading(false);
    }).catch(() => {
      toast.error("! دریافت تنظیمات لاگین با خطا مواجه شد");
      setLoading(false);
    })
  }, []);

  if (!isAuthenticated && isInitialized) {
    if (!loading) {
      if (loginConfig) {
        return <Login config={loginConfig} />;
      }
      else {
        return <BasicLogin />;
      }
    }
    return <Spinner />
  }

  return <AuthenticatedApp />
}
