
export default function ChatBotPage() {
  return (
    <main className="flex flex-col bg-white w-screen h-screen justify-center items-center bg-gray-800">
      <div className="flex-1 mt-4 h-5/6 w-10/12 flex flex-row gap-4 lg:w-6/12">
        <div className="h-16 w-16 bg-red-500">

        </div>
        <div className="flex-1">
          Test
        </div>
      </div>
      <div className="flex mt-4 h-1/6 justify-center">
        <input type="text" data-theme="night" className="input-lg input input-bordered input input-primary" />
      </div>
    </main>
  )
}
