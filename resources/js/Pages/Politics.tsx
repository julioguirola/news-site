import MainLayout from "@/Layouts/MainLayout";
import { PageProps } from "@/types";

export default function Politics({ auth }: PageProps) {
    return (
        <MainLayout auth={auth}>
            <div className="privacy-policy container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">
                    Política de Privacidad
                </h1>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            1. Información que Recopilamos
                        </h2>
                        <p className="text-gray-600">
                            Recopilamos información personal que usted nos
                            proporciona directamente, incluyendo: nombre,
                            dirección de correo electrónico, y otra información
                            que elija compartir con nosotros.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            2. Uso de la Información
                        </h2>
                        <p className="text-gray-600">
                            Utilizamos la información recopilada para
                            proporcionar, mantener y mejorar nuestros servicios,
                            así como para comunicarnos con usted sobre
                            actualizaciones y ofertas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            3. Protección de Datos
                        </h2>
                        <p className="text-gray-600">
                            Implementamos medidas de seguridad diseñadas para
                            proteger su información personal contra acceso no
                            autorizado y uso indebido.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            4. Sus Derechos
                        </h2>
                        <p className="text-gray-600">
                            Usted tiene derecho a acceder, corregir o eliminar
                            su información personal. Para ejercer estos
                            derechos, contáctenos a través de nuestros canales
                            oficiales.
                        </p>
                    </section>
                </div>
            </div>
        </MainLayout>
    );
}
