interface BaseModule {
  price: number;
  size: string;
  img: string;
}

interface ITents {
  binding?: string;
  karkas?: string;
  material?: string;
  price?: number;
  specifications?: string;
  tentSize?: string;
  id?: number;
  img?: string;
  colorPrice?: number;
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
}

type TModulesResponse = {
  tents: ITents[],
  winterModule: IWinterModules[],
  windows: IWindows[],
  innerWindows: IWindows[],
  curtains: ICurtains[],
}

export type {
  ITents,
  TModulesResponse
};
