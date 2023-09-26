import Login from "@/modules/auth/login";
import { useTranslation } from '@/app/i18n';
import { ParamI18nPage } from "@/types/i18n";
import { FC } from "react";

const Home:FC<ParamI18nPage> = async ( {params}) => {
  const { t } = await useTranslation(params.lng);
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        {t('title')}
        <Login/>
      </div>
    </div>
  );
}

export default Home;