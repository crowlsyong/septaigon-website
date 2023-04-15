export default function Infobox() {
  return (
    <div className="w-full pt-5 pb-10">
      <div
        className="max-w-screen-sm border-solid border-1 border-gray-700 flex justify-center items-center flex-col gap-4 rounded-xl w-4/5 mx-auto"
        style={{ backgroundColor: '#131417' }}
      >
        <div className="py-10 flex gap-4">    
          <p className="text-gray-400 text-left text-sm max-w-lg">
            ☑️ 1. What is A.I. consulting? <br />
            ☑️ 2. What is the solution? <br />
            ☑️ 3. What is the impact? <br />
            ☑️ 4. What is the cost? <br /> 
            ☑️ 5. What is the benefit? <br />
          </p>
          <div className="p-10 flex gap-4 bg-white rounded-xl"></div>
        </div>
      </div>
    </div>   
  );
}
