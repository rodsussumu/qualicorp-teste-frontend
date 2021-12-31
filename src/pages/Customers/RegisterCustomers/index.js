import { TextField } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import InputMask from "react-input-mask";
import { Wrapper } from "./styles";
import buscaCep from "../../../modules/cepPromise";
import api from "../../../api";
import NavBar from "../../../components/NavBar";

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

  const [cep, setCep] = useState(false);

  const onSubmit = (data) => {
    api
      .post("/customer", data)
      .then((resp) => console.log(resp))
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
                {...register("email", { required: true })}
              />
            )}
          />
          {errors.email && <span className="error">Campo obrigatorio</span>}

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
          {errors.telefone && <span className="error">Campo obrigatorio</span>}

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
          {errors.cpf && <span className="error">Campo obrigatorio</span>}

          <Controller
            name="cep"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <TextField
                className="input-form"
                {...field}
                label="Cep"
                onChange={setCep(field.value)}
                {...register("cep", { required: false })}
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

          <button type="submit" className="button-submit">
            Adicionar Cliente
          </button>
        </form>
      </Wrapper>
    </>
  );
}
