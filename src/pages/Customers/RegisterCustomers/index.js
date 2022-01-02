import { TextField } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import InputMask from "react-input-mask";
import { Wrapper } from "./styles";
import buscaCep from "../../../modules/cepPromise";
import api from "../../../api";
import NavBar from "../../../components/NavBar";
import { useHistory } from "react-router-dom";

export default function RegisterCustomers() {
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

  const history = useHistory();

  const [cep, setCep] = useState(false);
  const [errorApi, setErrorApi] = useState(false);

  const onSubmit = (data) => {
    api
      .post("/customer", data)
      .then((resp) => history.push("/all/customers"))
      .catch((error) => setErrorApi(error.response.data.message));
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

  return (
    <>
      <Wrapper>
        <NavBar />
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
          {errors.nome && <span className="error">Campo obrigatorio</span>}

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
          {errors.sobrenome && <span className="error">Campo obrigatorio</span>}

          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            )}
          />
          {errors.email?.type === "required" && (
            <span className="error">Campo obrigatorio</span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="error">Email invalido</span>
          )}

          <Controller
            name="telefone"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <InputMask
                mask="(99) 99999-9999"
                value={value}
                onChange={onChange}
              >
                {(inputProps) => (
                  <TextField
                    className="input-form"
                    {...register("telefone", {
                      required: true,
                    })}
                    label="Telefone"
                  />
                )}
              </InputMask>
            )}
          />
          {errors.telefone && <span className="error">Campo obrigatorio</span>}

          <Controller
            name="cpf"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <InputMask
                mask="999.999.999-99"
                value={value}
                onChange={onChange}
              >
                {(inputProps) => (
                  <TextField
                    className="input-form"
                    {...register("cpf", {
                      required: true,
                    })}
                    label="CPF"
                  />
                )}
              </InputMask>
            )}
          />
          {errors.cpf && <span className="error">Campo obrigatorio</span>}

          <Controller
            name="cep"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Cep"
                onBlur={setCep(field.value)}
                {...register("cep", { required: true })}
                inputProps={{ maxLength: 8 }}
              />
            )}
          />
          {errors.cep && <span className="error">Campo obrigatorio</span>}
          {errors.cep && errors.cep.type === "maxLength" && (
            <span className="error">Digite apenas os números do CEP</span>
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
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Numero"
                {...register("numero", { required: true })}
              />
            )}
          />
          {errors.numero && <span className="error">Campo obrigatorio</span>}

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
            Adicionar Cliente
          </button>
        </form>
      </Wrapper>
    </>
  );
}
