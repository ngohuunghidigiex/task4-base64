'use client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { decode as base64_decode, encode as base64_encode } from 'base-64';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import './Card.scss';
import md5 from 'md5';
import Image from 'next/image';

const Card = () => {
    const [option, setOption] = useState('base64');
    const [mode, setMode] = useState('encode');
    const [imageSrc, setImageSrc] = useState('');

    // value test image : https://i.pinimg.com/236x/33/47/16/3347168a4159ab1d424062fd3a39623c.jpg
    // value test json : {"name": "nghi","age": 23,"city": "ho chi minh","major": "Software Engineer"}

    const decode = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const text = e.target.value;
        try {
            let result = '';
            if (option === 'base64') {
                result = mode === 'decode' ? base64_decode(text) : base64_encode(text);
            } else if (option === 'base64-img') {
                if (mode === 'decode') {
                    result = base64_decode(text);
                    setImageSrc(result);
                } else {
                    result = base64_encode(text);
                    setImageSrc('');
                }
            } else if (option === 'json-formatter') {
                result = JSON.stringify(JSON.parse(text), null, 2);
                console.log(result);
            } else if (option === 'md5-convert') {
                result = md5(text);
            }
            const textarea = document.querySelector('.text-decode') as HTMLTextAreaElement;
            textarea.value = result;
        } catch (error: any) {
            const textarea = document.querySelector('.text-decode') as HTMLTextAreaElement;
            textarea.value = error;
        }
    };

    return (
        <div className="flex items-center justify-center h-screen flex-col gap-4 bg-red-200 ">
            <div className="title text-5xl uppercase tracking-[.15em] font-black">Decode 64 Base</div>
            <Tabs defaultValue="base64" className="w-[80%] flex flex-col items-center justify-center gap-10">
                <TabsList>
                    <TabsTrigger value="base64" onClick={() => setOption('base64')}>
                        Base 64
                    </TabsTrigger>
                    <TabsTrigger value="base64-img" onClick={() => setOption('base64-img')}>
                        Base 64 Image
                    </TabsTrigger>
                    <TabsTrigger value="json-formatter" onClick={() => setOption('json-formatter')}>
                        Json Formatter
                    </TabsTrigger>
                    <TabsTrigger value="md5-convert" onClick={() => setOption('md5-convert')}>
                        MD5 Converter
                    </TabsTrigger>
                </TabsList>
                {(option === 'base64' || option === 'base64-img') && (
                    <div className="mode-option">
                        {/* Giải mã */}
                        <Button
                            variant={'ghost'}
                            className={`btn ${mode === 'decode' && 'bg-slate-600 text-white'}`}
                            onClick={() => setMode('decode')}
                        >
                            Decode
                        </Button>
                        {/* Mã hóa */}
                        <Button
                            variant={'ghost'}
                            className={`btn ${mode === 'encode' && 'bg-slate-600 text-white'}`}
                            onClick={() => setMode('encode')}
                        >
                            Encode
                        </Button>
                    </div>
                )}
                <TabsContent value="base64" className="w-[80%]">
                    <div className="shadow-lg rounded-lg w-full h-[50vh] p-4 flex items-center justify-center gap-4 bg-slate-700">
                        <Textarea className="text-default w-full h-full bg-white" onChange={(e) => decode(e)} />
                        <Textarea className="text-decode w-full h-full bg-white" />
                    </div>
                </TabsContent>
                <TabsContent value="base64-img" className="w-[80%]">
                    <div className="shadow-lg rounded-lg w-full h-[50vh] p-4 flex items-center justify-center gap-4 bg-slate-700">
                        <Textarea className="text-default w-full h-full bg-white" onChange={(e) => decode(e)} />
                        <Textarea className="text-decode w-full h-full bg-white" />
                        {imageSrc && <Image src={imageSrc} width={200} height={200} alt="Decoded Image" />}
                    </div>
                </TabsContent>
                <TabsContent value="json-formatter" className="w-[80%]">
                    <div className="shadow-lg rounded-lg w-full h-[50vh] p-4 flex items-center justify-center gap-4 bg-slate-700">
                        <Textarea className="text-default w-full h-full bg-white" onChange={(e) => decode(e)} />
                        <Textarea className="text-decode w-full h-full bg-white" />
                    </div>
                </TabsContent>
                <TabsContent value="md5-convert" className="w-[80%]">
                    <div className="shadow-lg rounded-lg w-full h-[50vh] p-4 flex items-center justify-center gap-4 bg-slate-700">
                        <Textarea className="text-default w-full h-full bg-white" onChange={(e) => decode(e)} />
                        <Textarea className="text-decode w-full h-full bg-white" />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Card;
