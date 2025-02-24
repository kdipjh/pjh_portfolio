import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full gradient-border p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* 프로필 이미지 - object-fit 속성 수정 및 크기 조정 */}
          <div className="w-56 h-64 rounded-lg overflow-hidden relative gradient-border">
            <Image
              src="/images/pjh.jpg"
              alt="Profile picture"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* 프로필 정보 */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text">I AM</h2>
              <p className="text-xl">이름: 이프로</p>
              <p className="text-gray-400">포지션: PM 서비스 기획 / FE Developer(jr)</p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold mb-2 text-purple-400">Contact</h3>
              <p className="text-gray-300">Email: leepro@naver.com</p>
              <p className="text-gray-300">Phone: +082-1234-5678</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2 text-purple-400">Channel</h3>
              <div className="space-y-2">
                <div className="w-full h-10 border border-gray-700 rounded-md hover:border-purple-500 transition-colors"></div>
                <div className="w-full h-10 border border-gray-700 rounded-md hover:border-purple-500 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 