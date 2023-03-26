import { DetalleVenta } from "./detalle-venta";

// ? habilita a las prodiedades que ingresen valores nulos 

export interface Venta {
    idVenta?: number,
    numeroDocumento?: string,
    tipoPago: string,
    fechaRegistro?: string,
    totalTexto: string,
    detalleVenta: DetalleVenta[]
}
