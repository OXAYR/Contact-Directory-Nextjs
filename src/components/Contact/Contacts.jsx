"use client";
import React, { useState } from "react";
import { useContext } from "react";
import { ContactContext } from "@/context/ContactContext";
import "./styles.css";

const Contacts = () => {
	const { contact, addContact, editContact, deleteContact } =
		useContext(ContactContext);
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [contactId, setContactId] = useState(null);
	const [isEdit, setIsEdit] = useState(false);

	const handleaddContact = (e) => {
		e.preventDefault();

		if (!name && !number) return;

		const newContact = {
			id: Date.now(),
			name,
			number,
		};
		addContact(newContact);

		setName("");
		setNumber("");
	};

	const handleRemoveContact = (contactId) => {
		deleteContact(contactId);
	};

	const EditAContact = (contactId) => {
		const editContact = contact.filter((contact) => contact.id === contactId)[0];
		console.log(editContact);
		setName(editContact.name);
		setNumber(editContact.number);
		setContactId(contactId);
		setIsEdit(true);
	};

	const handleeditContact = (e) => {
		e.preventDefault();

		if (!name && !number) return;

		const updatedContact = {
			id: contactId,
			name,
			number,
		};

		console.log(updatedContact.id, updatedContact);
		editContact(updatedContact.id, updatedContact);

		setName("");
		setNumber("");
		setIsEdit(false);
	};

	return (
		<div className="container mx-auto">
			<form className="p-4 border">
				<h1 className="text-3xl font-bold mb-4">Add Contact</h1>
				<input
					type="text"
					className="border p-2 m-2"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					placeholder="Number"
					value={number}
					className="border p-2 m-2"
					onChange={(e) => setNumber(e.target.value)}
				/>
				<button
					className={`bg-blue-500 text-white p-2 m-2`}
					onClick={isEdit ? handleeditContact : handleaddContact}
				>
					{isEdit ? "Edit Contact" : "Add New Contact"}
				</button>
			</form>
			<h1 className="text-3xl my-4 font-bold ">Contacts Directory</h1>
			{contact ? (
				contact.map((contact) => (
					<div
						key={contact.id}
						className="border p-4"
					>
						<h3 className="text-xl font-semibold">{contact.name}</h3>
						<p className="text-gray-600">{contact.number}</p>
						<button
							className="text-blue-500 m-2"
							onClick={() => EditAContact(contact.id)}
						>
							Edit
						</button>
						<button
							className="text-red-500 m-2"
							onClick={() => handleRemoveContact(contact.id)}
						>
							Delete
						</button>
					</div>
				))
			) : (
				<p className="text-gray-500">No contacts found.</p>
			)}
		</div>
	);
};

export default Contacts;
