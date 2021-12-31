import cep from "cep-promise";

const buscaCep = async (cepFromUser) => {
  const data = await cep(cepFromUser);
  return data;
};

export default buscaCep;
