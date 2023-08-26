
export default async function Home() {
  return (
    <main className="flex w-full mt-0 flex-col items-center min-h-screen">
      <div className="flex mt-24 flex-col tran items-center min-h-screen w-full" style={{backgroundImage: 'url(home-main.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="text-center">
          <h1 className="text-7xl mt-64 font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-700">Launching Dreams, Connecting Minds.</h1>
          <p className="mt-4 text-xl text-gray-400">Indian e-Marketplace and Community for Space and Research.</p>
        </div>
      </div>
    </main>
  )
}
