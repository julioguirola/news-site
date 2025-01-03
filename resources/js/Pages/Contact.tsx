import MainLayout from "@/Layouts/MainLayout";
import { PageProps } from "@/types";
import React from "react";

const ContactPage = ({ auth }: PageProps) => {
    return (
        <MainLayout auth={auth}>
            <div className="py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">
                        Contact Space News
                    </h1>
                    <p className="text-center text-gray-600 mb-12">
                        Have a news tip? Want to reach our editorial team?
                    </p>

                    <div className="mt-12 flex flex-col gap-8 text-center">
                        <div>
                            <h3 className="font-bold mb-2">Email</h3>
                            <p className="text-gray-600">
                                contact@spacenews.com
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Phone</h3>
                            <p className="text-gray-600">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Address</h3>
                            <p className="text-gray-600">
                                123 Space Street
                                <br />
                                Houston, TX 77001
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactPage;
