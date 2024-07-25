'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center p-4" data-theme={theme}>

      <div className="card bg-base-200 max-w-screen-md min-h-[550px] shadow-xl">
        <div className="card-body space-y-8">
          <h2 className="card-title mx-auto text-2xl">Perguntas frequentes</h2>
          <div className="flex flex-row flex-wrap sm:flex-nowrap">
            <div className="flex justify-center items-center w-full flex-col space-y-5 h-full p-8">
              <div className="w-60 sm:w-auto">
              <Image
                src="/faq.svg"
                alt="FAQ"
                width={400}
                height={400}
                className="object-contain"
              />
              </div>

              <div className="mx-auto">
              <label className="swap swap-rotate">
                <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />

                <svg
                  className="swap-on h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg
                  className="swap-off h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
              </div>
            </div>
            
            <div className="space-y-4">
            <div className="collapse collapse-arrow bg-base-100">
              <input type="radio" name="my-accordion" defaultChecked />
              <div className="collapse-title text-xl font-medium">Como faço para redefinir minha senha?</div>
              <div className="collapse-content">
                <p>
                  Para redefinir sua senha, vá até a página de login e clique em &quot;Esqueceu sua senha?&quot;. 
                  Você receberá um e-mail com um link para redefinir sua senha.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-xl font-medium">Quais são os métodos de pagamento?</div>
              <div className="collapse-content">
                <p>
                  Atualmente, aceitamos cartões de crédito e débito das bandeiras Visa, Mastercard e American Express.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-xl font-medium">Qual é a política de reembolso?</div>
              <div className="collapse-content">
                <p>
                  Se você não estiver satisfeito com o produto, entre em contato conosco para solicitar um reembolso.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-xl font-medium">Como entro em contato com o suporte?</div>
              <div className="collapse-content">
                <p>
                  Você pode entrar em contato conosco através do nosso e-mail de suporte:
                  <a href="mailto:suporte@suporte.com">
                    suporte@suporte.com
                  </a>
                </p>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
