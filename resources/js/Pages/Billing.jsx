import { Table } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Billing({ auth, subscriptions }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Billing" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="overflow-x-auto p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>Package Name</Table.HeadCell>
                                <Table.HeadCell>Start Date</Table.HeadCell>
                                <Table.HeadCell>End Date</Table.HeadCell>
                                <Table.HeadCell>Status</Table.HeadCell>
                                <Table.HeadCell>Amount</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {/* Assuming `subscriptions` is an array in your component's state or props */}
                                {subscriptions.map((subscription) => (
                                    <Table.Row
                                        key={subscription.id}
                                        className="container mx-auto bg-white dark:border-gray-700 dark:bg-gray-800"
                                    >
                                        {/* Package Name */}
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {subscription.package.name}
                                        </Table.Cell>
                                        {/* Start Date */}
                                        <Table.Cell>
                                            {new Date(
                                                subscription.start_date
                                            ).toLocaleDateString()}
                                        </Table.Cell>
                                        {/* End Date */}
                                        <Table.Cell>
                                            {new Date(
                                                subscription.end_date
                                            ).toLocaleDateString()}
                                        </Table.Cell>
                                        {/* Status (Active/Inactive) */}
                                        <Table.Cell>
                                            {subscription.is_active
                                                ? "Active"
                                                : "Inactive"}
                                        </Table.Cell>
                                        {/* Amount from latest transaction */}
                                        <Table.Cell>
                                            {subscription.transactions.length >
                                            0
                                                ? `$${parseFloat(
                                                      subscription
                                                          .transactions[0]
                                                          .total_amount
                                                  ).toFixed(2)}`
                                                : "N/A"}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
