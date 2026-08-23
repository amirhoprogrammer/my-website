export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-foreground mt-20 mx-5 rounded-2xl py-5">
      <h1 className="text-9xl font-bold text-command">404</h1>

      <h2 className="text-3xl font-semibold mt-4 text-white">oh no</h2>

      <p className="text-white mt-2">
        it looks you are lost if you go home click this button
      </p>

      <a href="/" className="mt-6 rounded-lg bg-command px-6 py-3 text-white">
        home page
      </a>
    </div>
  );
}
