import Image from 'next/image'
import ExampleClientComponent from '../components/ExampleClientComponent'
import initTranslations from '../i18n';
import  TranslationsProvider  from '@/app/components/TranslationsProvider';
import LanguageChanger from './../components/LanguageChanger';
import { auth } from '../lib/auth';
import { redirect } from 'next/navigation';
const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t,resources  } = await initTranslations(locale, i18nNamespaces, undefined, undefined);
  const session = await auth();
  if(!session) redirect('/auth')
  
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1>{t('greeting')}</h1>
    <LanguageChanger/>
    {session?.user.image && <Image src={session.user.image} width={100} height={100} alt="user image"/>}
     
    </main>
    </TranslationsProvider>
  )
}
