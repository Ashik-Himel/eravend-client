import { Helmet } from "react-helmet-async";

export default function SubmitContract() {
  const handleContractSubmit = e => {
    e.preventDefault();

    
  }
  return (
    <main>
      <Helmet>
        <title>Submit Contract - Eravend</title>
      </Helmet>

      <section className="my-12">
        <div className="container">
          <form onSubmit={handleContractSubmit}>
            <h2 className="text-3xl font-medium text-primary text-center mb-6">Vertragspapier Einreichen</h2>

            <div className="w-full max-w-[600px] mx-auto">
              <label className="block font-medium mb-2" htmlFor="email">E-Mail</label>
              <input className="input w-full border border-gray-300 mb-4" type="email" name="email" id="email" placeholder="Geben sie ihre E-Mail Adresse ein" required />
            </div>

            <div className="w-full max-w-[600px] mx-auto">
              <label className="block font-medium mb-2" htmlFor="paper">Vertragspapier</label>
              <input className="w-full border border-gray-300 p-1 rounded-lg mb-6" type="file" name="paper" id="paper" required />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Einreichen</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}