"use client"

import React, { useEffect, useRef, useState } from 'react'
import Cookies from "js-cookie";
import Link from 'next/link';

const CookiesTemplate = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        required: true,
        marketing: false,
    });

    useEffect(() => {
        const consent = Cookies.get("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAcceptAll = () => {
        setPreferences({ required: true, marketing: true });
        savePreferences({ required: true, marketing: true });

        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
        });
    
        enableGoogleAnalytics();
        setIsVisible(false);
    };

    const handleSavePreferences = () => {
        savePreferences(preferences);
    };

    const savePreferences = (prefs) => {
        Cookies.set("cookieConsent", JSON.stringify(prefs), { expires: 365 });
        setIsVisible(false);
    };

    const togglePreference = (type) => {
        setPreferences((prev) => ({ ...prev, [type]: !prev[type] }));
    };

    
    const enableGoogleAnalytics = () => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "page_view", {
                page_path: window.location.pathname,
            });
        }
    };
    
    if (!isVisible) return null;
    
    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-[999] ${isVisible ? "block" : "hidden"}`}></div>
            <div className='fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[700px] h-auto bg-[#131313b3] backdrop-blur-[5px] rounded-[5px] z-[1000] py-[32px] px-[48px] cookies md:w-[90%] sm:px-[16px]'>
                <p className='text-[25px] text-[#E2B350] font-medium tracking-[2.5px] text-center'>Twoja prywatność jest dla nas ważna</p>
                <p className='text-[16px] tracking-[1px] mt-[16px] sm:text-[15px]'>Na naszej stronie wykorzystujemy pliki cookies oraz podobne technologie, które mogą być używane do personalizacji reklam. Szczegóły znajdziesz w naszej <Link href="/#" className='text-[#E2B350]'>polityce prywatności</Link>. Dodatkowe informacje dostępne są <Link href="https://policies.google.com/technologies/partner-sites" className='text-[#E2B350]'>tutaj</Link>.</p>
                {showSettings ? (
                    <div className='mt-[32px] flex flex-col'>
                        <input type="checkbox" id="required" checked={preferences.required} disabled className='hidden peer cursor-not-allowed' />
                        <label htmlFor='required' className='flex items-center'>
                            <span className='quadBeforeChecked flex items-center tracking-[1px] xl:text-[15px]'>Wymagane</span>
                        </label>
                        <p className='text-[14px] text-[#d3d3d3] tracking-[0.5px] mt-[8px]'>Pliki cookies wykorzystywane do zapewnienia podstawowych funkcjonalności strony</p>

                        <div className='w-full flex gap-[10px]'>
                            <input type="checkbox" id="marketing_statistics" checked={preferences.marketing} onChange={() => togglePreference("marketing")} className='hidden peer' />
                            <label htmlFor='marketing_statistics' className='mt-[8px] flex items-center cursor-pointer'>
                                <span className='quadBefore flex items-center tracking-[1px] xl:text-[15px]'>Marketing i Statystyka</span>
                            </label>
                        </div>
                            <p className='text-[14px] text-[#d3d3d3] tracking-[0.5px] mt-[8px]'>Pliki cookie używane do analizowania aktywności użytkowników na stronie oraz dostosowywania treści reklamowych do ich preferencji</p>

                        <div className='mt-[32px] flex justify-between sm:flex-col sm:gap-[16px]'>
                            <button onClick={handleSavePreferences} className='text-[15px] tracking-[1.5px] text-[#3C3C3C] bg-[#FFDE98] shadow-[0px_4px_20px_0px_#FFFFFF25] px-[40px] py-[12.5px] rounded-[5px] duration-700 hover:scale-90'>Zapisz ustawienia</button>
                            <button onClick={() => { setShowSettings(false); setIsVisible(true) }} className='text-[15px] tracking-[1.5px]  px-[40px] py-[12.5px] rounded-[5px] duration-700 hover:scale-90 bg-[#0C0C0C] text-[#FFDE98]'>Anuluj</button>
                        </div>

                    </div>
                ) : (
                    <div className='mt-[32px] flex justify-between sm:flex-col sm:gap-[16px]'>
                        <button onClick={handleAcceptAll} className='text-[15px] duration-700 hover:scale-90  text-[#3C3C3C] tracking-[1.4px] py-[15px] px-[30px] bg-[#FFDE98] shadow-[0px_4px_20px_0px_#FFFFFF25] rounded-[5px]'>Akceptuj wszystkie</button>
                        <button onClick={() => setShowSettings(true)} className='text-[15px] duration-700 hover:scale-90 tracking-[1.4px] py-[15px] px-[30px] bg-[#0C0C0C] text-[#FFDE98] rounded-[5px]'>Ustawienia</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default CookiesTemplate