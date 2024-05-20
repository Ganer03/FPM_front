"use client";
import {
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { BlueButton } from "@/entities";
import Link from "next/link";
import { ReactElement, useMemo, useState } from "react";
import { Button } from "@nextui-org/button";

export const LeedForm = (): ReactElement => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [nameValue, setNameValue] = useState<string>();
  const [phoneValue, setPhoneValue] = useState<string>();
  const [emailValue, setEmailValue] = useState<string>();

  const validateEmail = (value: string): RegExpMatchArray | null =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const validatePhone = (value: string): RegExpMatchArray | null =>
    value.match(
      /^[+]?[0-9]{1,2}[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
    );

  const isCheckboxInvalid = useMemo(() => {
    return !checkboxValue;
  }, [checkboxValue]);

  const isEmailInvalid = useMemo(() => {
    if (emailValue === undefined) return false;
    if (emailValue === "") return true;

    return !validateEmail(emailValue);
  }, [emailValue]);

  const isPhoneInvalid = useMemo(() => {
    if (phoneValue === undefined) return false;
    if (phoneValue === "") return true;

    return !validatePhone(phoneValue);
  }, [phoneValue]);

  const isNameInvalid = useMemo(() => {
    if (nameValue === undefined) return false;
    return nameValue === "";
  }, [nameValue]);

  const isDisabled = useMemo(() => {
    return (
      !nameValue ||
      !emailValue ||
      !phoneValue ||
      isNameInvalid ||
      isPhoneInvalid ||
      isEmailInvalid ||
      isCheckboxInvalid
    );
  }, [
    isEmailInvalid,
    isPhoneInvalid,
    isNameInvalid,
    isCheckboxInvalid,
    nameValue,
    emailValue,
    phoneValue,
  ]);

  const sendApplication = (): void => {
    if (isDisabled) return;

    const data = {
      phone: phoneValue,
      email: emailValue,
      name: nameValue,
    };

    console.log(data);
    onOpen();
  };
  return (
    <>
      <div className={"grid grid-cols-1 gap-4 my-4"}>
        <Input
          value={nameValue}
          type={"text"}
          label={"Имя"}
          name={"name"}
          color={isNameInvalid ? "danger" : "default"}
          errorMessage={isNameInvalid && "Введите свое имя"}
          onValueChange={setNameValue}
          isInvalid={isNameInvalid}
          required={true}
        />
        <Input
          value={phoneValue}
          type={"phone"}
          label={"Номер телефона"}
          name={"phone"}
          color={isPhoneInvalid ? "danger" : "default"}
          errorMessage={isPhoneInvalid && "Введите правильный номер телефона"}
          onValueChange={setPhoneValue}
          isInvalid={isPhoneInvalid}
          required={true}
        />
        <Input
          value={emailValue}
          type={"email"}
          label={"Почта"}
          name={"email"}
          color={isEmailInvalid ? "danger" : "default"}
          errorMessage={isEmailInvalid && "Введите правильный email адрес"}
          onValueChange={setEmailValue}
          isInvalid={isEmailInvalid}
          required={true}
        />
        <BlueButton
          disabled={isDisabled}
          className={"py-4 px-6 w-full rounded-lg"}
          onClick={sendApplication}
          text={"Подать заявку"}
        />
      </div>
      <Checkbox
        isSelected={checkboxValue}
        onValueChange={setCheckboxValue}
        defaultSelected
        size="md"
        required={true}
      >
        <span className={"ml-2 text-zinc-900 md:text-md sm:text-sm text-xs"}>
          Я даю согласие на обработку персональных данных, согласен на получение
          информационных рассылок от КубГУ и соглашаюсь c
          <Link
            href="/privacy-policy"
            target={"_blank"}
            className={"font-bold"}
          >
            {" "}
            политикой конфиденциальности
          </Link>
          .
        </span>
      </Checkbox>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Заявку отправлена успешно!
              </ModalHeader>
              <ModalBody>Спасибо!</ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Закрыть
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
