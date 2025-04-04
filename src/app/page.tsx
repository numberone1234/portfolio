import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 py-6 px-4 relative overflow-hidden">
      {/* 컬러풀한 배경 장식 요소 */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full filter blur-3xl opacity-10 translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-1/4 h-1/4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="max-w-4xl mx-auto space-y-4 relative z-10">
        {/* Page 1 - Profile Card */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg p-6 border-2 border-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm relative">
          {/* 컬러풀한 액센트 */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-white border-b-2 border-gray-600 pb-2">Profile : Title</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-48 h-48 rounded-full border-2 border-gray-600 relative group overflow-hidden">
                <Image 
                  src="/usb1.jpg" 
                  alt="프로필 이미지" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 192px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-grow">
              <div className="space-y-4">
                {/* I AM Section */}
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <span className="text-blue-400 mr-2">_</span>I AM
                  </h3>
                  <p className="text-gray-300">이름 : <span className="text-pink-300">이프로</span></p>
                  <p className="text-gray-300">포지션: <span className="text-cyan-300">PM 서비스 기획</span> / <span className="text-yellow-300">FE Developer(jr)</span></p>
                </div>
                
                {/* Contact Section */}
                <div>
                  <h3 className="text-xl font-bold text-white border-t-2 border-gray-600 pt-2 flex items-center">
                    <span className="text-green-400 mr-2">_</span>Contact
                  </h3>
                  <p className="text-gray-300">Email : <span className="text-blue-300">leepro@naver.com</span></p>
                  <p className="text-gray-300">Phone : <span className="text-purple-300">+082 - 1234-5678</span></p>
                </div>
                
                {/* Channel Section */}
                <div className="border-t-2 border-gray-600 pt-2">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <span className="text-yellow-400 mr-2">_</span>Channel
                  </h3>
                  <div className="flex items-center mt-2">
                    <p className="w-20 text-gray-300">SNS :</p>
                    <div className="flex-grow border border-gray-600 rounded p-2 flex items-center bg-gray-700 hover:bg-gray-650 transition-colors duration-200">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-sm ml-auto"></div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <p className="w-20 text-gray-300">GitHub :</p>
                    <div className="flex-grow border border-gray-600 rounded p-2 bg-gray-700 hover:bg-gray-650 transition-colors duration-200">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Introduction Section */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg p-6 border-2 border-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm relative">
          {/* 컬러풀한 액센트 */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500"></div>
          
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-white border-b-2 border-gray-600 pb-2">Introduce</h2>
          </div>
          
          <div className="mt-4 p-4 border border-gray-600 rounded-lg bg-gray-700 hover:bg-gray-650 transition-colors duration-200">
            <p className="text-center text-gray-300">간단한 자기소개 및 인사말</p>
          </div>
        </div>
        
        {/* Tech Skills Section */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg p-6 border-2 border-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm relative">
          {/* 컬러풀한 액센트 */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
          
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-white border-b-2 border-gray-600 pb-2">Tech Skill</h2>
          </div>
          
          <div className="mt-4 p-4 border border-gray-600 rounded-lg bg-gray-700">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="border-2 border-gray-600 rounded-lg px-4 py-2 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white transform hover:scale-105 transition-transform duration-200">
                <span>JS</span>
              </div>
              <div className="border-2 border-gray-600 rounded-lg px-4 py-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white transform hover:scale-105 transition-transform duration-200">
                <span>TS</span>
              </div>
              <div className="border-2 border-gray-600 rounded-lg px-4 py-2 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white transform hover:scale-105 transition-transform duration-200">
                <span>React</span>
              </div>
              <div className="border-2 border-gray-600 rounded-lg px-4 py-2 bg-gradient-to-br from-sky-500 to-sky-600 text-white transform hover:scale-105 transition-transform duration-200">
                <span>Tailwindcss</span>
              </div>
              <div className="border-2 border-gray-600 rounded-lg px-4 py-2 bg-gradient-to-br from-purple-500 to-purple-600 text-white transform hover:scale-105 transition-transform duration-200">
                <span>Premierepro</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Page indicator */}
        <div className="flex justify-end items-center">
          <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
        </div>
      </div>
    </div>
  );
}
