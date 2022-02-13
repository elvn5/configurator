interface BaseModule {
  price: number;
  size: string;
  img: string;
}

interface ICard {
  binding?: string;
  karkas?: string;
  material?: string;
  price?: number;
  specifications?: string;
  tentSize?: string;
  id?: number;
  img?: string;
  colorPrice?: number;
  title?: string;
  size?: string;
  type?: string;
}

interface IWinterModules extends BaseModule {
  img: string;
}

interface IWindows extends BaseModule {
  type: string;
}

interface ICurtains {
  binding: string;
  description: string;
  input: string;
  material: string;
  price: number;
  title: string;
  img: string;
}

type TModulesResponse = {
  tents: ICard[],
  winterModule: IWinterModules[],
  windows: IWindows[],
  roofWindows: IWindows[],
  curtains: ICurtains[],

}

export type {
  ICard,
  TModulesResponse,
};
