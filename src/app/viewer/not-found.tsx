"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
	const navigation = useRouter();

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
			<p className="text-lg mb-8">
				A página que você está procurando não existe.
			</p>
			<Button onClick={() => navigation.back()}>Voltar</Button>
		</div>
	);
};

export default NotFoundPage;
