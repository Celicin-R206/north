import React, { useEffect, useState } from "react";
import logo from "../../../assets/icons/logo.png";
import "./style.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const Header = () => {
  const [sendSms, setSendSms] = useState(false);
  console.log(sendSms);
  const handleSendMessage = () => {
    setSendSms(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setSendSms(false);
    }, 5000);
  }, [sendSms]);

  console.log(sendSms);
  return (
    <div className="header">
      <div className=" container1 flex items-center justify-between">
        <div className="left">
          <img src={logo} alt="logo" />
        </div>
        <div className="center flex items-center gap-8">
          <a href="#">Accueil</a>
          <a href="#">A propos</a>
          <a href="#">Nos produit</a>
        </div>
        <div className="right flex items-center gap-8">
          {/* <span>
            <svg
              className="w-[1.5rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M7.6582031 2C6.8615365 2 6.1344998 2.4791595 5.8203125 3.2109375L3.3398438 9L2.0019531 9C1.6889531 9 1.3950781 9.1455313 1.2050781 9.3945312C1.0170781 9.6425312 0.95315625 9.964625 1.0351562 10.265625L3.5957031 19.53125C3.8347031 20.39525 4.6274375 21 5.5234375 21L18.476562 21C19.372563 21 20.164344 20.396203 20.402344 19.533203L22.962891 10.267578C23.045891 9.9665781 22.982922 9.6425312 22.794922 9.3945312C22.604922 9.1455313 22.310047 9 21.998047 9L20.660156 9L18.177734 3.2128906L18.179688 3.2128906C17.865994 2.4777169 17.13651 2 16.339844 2L7.6582031 2 z M 7.6582031 4L16.339844 4L18.482422 9L5.5175781 9L7.6582031 4 z M 8 12C8.552 12 9 12.448 9 13L9 17C9 17.552 8.552 18 8 18C7.448 18 7 17.552 7 17L7 13C7 12.448 7.448 12 8 12 z M 12 12C12.552 12 13 12.448 13 13L13 17C13 17.552 12.552 18 12 18C11.448 18 11 17.552 11 17L11 13C11 12.448 11.448 12 12 12 z M 16 12C16.552 12 17 12.448 17 13L17 17C17 17.552 16.552 18 16 18C15.448 18 15 17.552 15 17L15 13C15 12.448 15.448 12 16 12 z"
                fill="#5B5B5B"
              />
            </svg>
          </span> */}
          <div className="btn flex gap-4 items-center">
            <Dialog>
              <DialogTrigger asChild>
                <button>CONTACTEZ-NOUS</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Envoyer un message</DialogTitle>
                  <DialogDescription>
                    Veuillez remplir ce formulaire ci-dessous pour nous
                    contacter et discuter le prix des produits qui vous
                    intéressent
                  </DialogDescription>
                  <p>Votre message sera envoyé à :</p>
                  <div className="send flex justify-between gap-4 mt-10">
                    <span className="flex gap-2 items-center border rounded-lg w-full">
                      <img src="/gmail.svg" alt="gmail" className="w-[2rem]" />
                      <small>Email</small>
                    </span>
                    <span className="flex gap-2 items-center border rounded-lg w-full">
                      <img
                        src="/whatapp.svg"
                        alt="whatapp"
                        className="w-[2rem]"
                      />
                      <small>WhatApp</small>
                    </span>
                  </div>
                </DialogHeader>
                {sendSms && (
                  <p className="mt-4 bg-green-200 p-1">
                    Votre message a été envoyé avec succès.
                  </p>
                )}
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="nom">nom</Label>
                    <Input
                      id="nom"
                      // value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">email</Label>
                    <Input
                      id="email"
                      // value="@peduarte"
                      className="col-span-3"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="numero">numero</Label>
                    <Input
                      id="numero"
                      // value="@peduarte"
                      className="col-span-3"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Votre message</Label>
                    <Textarea
                      placeholder="Type your message here."
                      className="w-full"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    className="bg-[#0fbc60]"
                    onClick={() => {
                      handleSendMessage();
                    }}>
                    Envoyer
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
