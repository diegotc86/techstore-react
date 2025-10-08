import { Link, useNavigate } from "react-router";

type Props = {
  loginUser: (
    username: string,
    password: string
  ) => Promise<"Credenciales Inválidas" | undefined>;
};

export function Login({ loginUser }: Props) {
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const error = await loginUser(username, password);
    if (error) {
      alert(error);
    } else {
      navigate("/");
    }
  }

  return (
    <main className="py-16">
      <div className="px-4 max-w-7xl mx-auto md:px-8">
        <div className="max-w-sm mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Inicia sesión en tu cuenta
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-10">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="username"
                className="text-sm font-medium leading-none"
              >
                Nombre de usuario
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="flex h-10 w-full rounded-xl border border-neutral-300 bg-white py-2 px-3 text-base md:text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="flex h-10 w-full rounded-xl border border-neutral-300 bg-white py-2 px-3 text-base md:text-sm"
              />
            </div>
            <button className="inline-block px-8 py-3 bg-[#5B5BD6] rounded-lg font-medium w-full text-white text-sm">
              Iniciar sesión
            </button>
          </form>
          <div className="text-center text-sm text-neutral-500">
            <span>¿Aún no tienes cuenta? </span>
            <Link to="/signup" className="text-sm text-[#5B5BD6] ml-1">
              Crea una cuenta
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
