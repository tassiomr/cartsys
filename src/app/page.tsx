"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAppStore } from "@/store/useAppStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
	const wizards = useAppStore((store) => store.wizards);
	const navigation = useRouter();

	const handleOpenWizard = (id: string) => {
		navigation.push(`/viewer/${id}`);
	};

	return (
		<div className="w-full h-full pt-[6rem] px-12 pb-8">
			{wizards.length ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{wizards.map((wizard, index) => (
						<Card
							data-testId={`wizard-${index}`}
							key={wizard.id}
							onClick={() => handleOpenWizard(wizard.id)}
						>
							<CardHeader className="bg-primary rounded-tr-sm rounded-tl-sm" />
							<CardDescription className="p-4 flex flex-col gap-2">
								<Label>Orientarion: {wizard.orientation}</Label>
								<Label>Pages: {wizard.pages.length}</Label>
								{wizard.createdAt && (
									<Label>
										Created at:{" "}
										{new Date(wizard?.createdAt).toLocaleDateString()}
									</Label>
								)}
							</CardDescription>
						</Card>
					))}
				</div>
			) : (
				<div className="flex flex-col justify-center items-center w-full h-full">
					<p className="text-lg ">
						Parece que você ainda não criou nenhum wizard!
					</p>
					<p className="mb-8 text-center">
						Que tal começar a criar seu primeiro wizard agora?
					</p>
					<Link href="/wizard-creator">
						<Button>Criar Wizard</Button>
					</Link>
				</div>
			)}
		</div>
	);
}
