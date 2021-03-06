import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { Wrapper } from "./styles";
import buscaCep from "../../../modules/cepPromise";
import api from "../../../api";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import NavBar from "../../../components/NavBar";

export default function UpdateCustomers() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      sobrenome: "",
      email: "",
      telefone: "",
      cpf: "",
      cep: "",
      endereco: "",
      estado: "",
      cidade: "",
      bairro: "",
      numero: "",
      complemento: "",
    },
  });

  const { id } = useParams();
  const history = useHistory();

  const [cep, setCep] = useState(false);
  const [errorApi, setErrorApi] = useState(false);

  const onSubmit = (data) => {
    api
      .put(`/customer/${id}`, data)
      .then((resp) => history.push("/all/customers"))
      .catch((error) => setErrorApi(error.response.data.message));
  };

  const getValue = () => {
    api
      .get(`/customer/${id}`)
      .then((resp) => {
        setValue("nome", resp.data.nome);
        setValue("sobrenome", resp.data.sobrenome);
        setValue("email", resp.data.email);
        setValue("telefone", resp.data.telefone);
        setValue("cpf", resp.data.cpf);
        setValue("cep", resp.data.cep);
        setValue("estado", resp.data.estado);
        setValue("cidade", resp.data.cidade);
        setValue("bairro", resp.data.bairro);
        setValue("endereco", resp.data.endereco);
        setValue("numero", resp.data.numero);
        setValue("complemento", resp.data.complemento);
      })
      .catch((error) => console.log(error));
  };

  useEffect(async () => {
    if (cep.length === 8) {
      const data = await buscaCep(cep);
      setValue("endereco", data.street);
      setValue("estado", data.state);
      setValue("cidade", data.city);
      setValue("bairro", data.neighborhood);
    }
  }, [cep]);

  useEffect(() => {
    getValue();
  }, []);

  return (
    <>
      <Wrapper>
        <NavBar visible={true} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="nome"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Nome"
                {...register("nome", { required: true })}
              />
            )}
          />
          {errors.nome && <span className="error">Campo obrigat??rio</span>}

          <Controller
            name="sobrenome"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Sobrenome"
                {...register("sobrenome", { required: true })}
              />
            )}
          />
          {errors.sobrenome && <span className="error">Campo obrigat??rio</span>}

          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Email"
                {...register("email", { required: true })}
              />
            )}
          />
          {errors.email?.type === "required" && (
            <span className="error">Campo obrigat??rio</span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="error">Email invalido</span>
          )}

          <Controller
            name="telefone"
            control={control}
            rules={{ required: false }}
            render={({ field: { onChange, value } }) => (
              <InputMask
                mask="(99) 99999-9999"
                value={value}
                onChange={onChange}
              >
                {(inputProps) => (
                  <TextField
                    className="input-form"
                    error={!!errors.phone?.message}
                    label="Telefone"
                  />
                )}
              </InputMask>
            )}
          />
          {errors.telefone && <span className="error">Campo obrigat??rio</span>}

          <Controller
            name="cpf"
            control={control}
            rules={{ required: false }}
            render={({ field: { onChange, value } }) => (
              <InputMask
                mask="999.999.999-99"
                value={value}
                onChange={onChange}
              >
                {(inputProps) => (
                  <TextField
                    className="input-form"
                    error={!!errors.phone?.message}
                    label="CPF"
                  />
                )}
              </InputMask>
            )}
          />
          {errors.cpf && <span className="error">Campo obrigat??rio</span>}

          <Controller
            name="cep"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Cep"
                onBlur={setCep(field.value)}
                {...register("cep", { required: false })}
                inputProps={{ maxLength: 8 }}
              />
            )}
          />
          {errors.cep && <span className="error">Campo obrigat??rio</span>}
          {errors.cep && errors.cep.type === "maxLength" && (
            <span className="error">Digite apenas os n??meros do CEP</span>
          )}

          <Controller
            name="endereco"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField
                {...field}
                className="input-form"
                label="Endereco"
                {...register("endereco", { required: false })}
                disabled
              />
            )}
          />

          <Controller
            name="estado"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Estado"
                {...register("estado", { required: false })}
                disabled
              />
            )}
          />

          <Controller
            name="cidade"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Cidade"
                {...register("cidade", { required: false })}
                disabled
              />
            )}
          />

          <Controller
            name="bairro"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Bairro"
                {...register("bairro", { required: false })}
                disabled
              />
            )}
          />

          <Controller
            name="numero"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Numero"
                {...register("numero", { required: false })}
              />
            )}
          />
          {errors.numero && <span className="error">Campo obrigat??rio</span>}

          <Controller
            name="complemento"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Complemento"
                {...register("complemento", { required: false })}
              />
            )}
          />
          {<span className="error-api">{errorApi}</span>}

          <button type="submit" className="button-submit">
            Atualizar cliente
          </button>
        </form>
      </Wrapper>
    </>
  );
}
