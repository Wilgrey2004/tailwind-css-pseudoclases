export const Input = () => {
  return (
    <div className="p-4 flex justify-center text-center">
      <input
        type="text"
        className="border rounded-md ml-2 px-2 placeholder:text-orange-600 placeholder:italic"
        placeholder="Hola mundooo"
      />
      <br />
      <input
        type="file"
        className="ml-4 file:border-0 file:rounded-md file:bg-violet-50 file:text-violet-700 file:font-semibold hover:file:bg-violet-500 hover:file:text-violet-50"
        name=""
        id=""
      />
    </div>
  );
};
