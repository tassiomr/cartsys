import { Button } from "@/components/ui/button";
import { Wizard } from "@/types/wizard";

export default function Page() {
  const wizards: Wizard[] = [];
  return (
    <div className="w-full h-full pt-[4rem] px-4">
      {wizards.length ? (
        <div className="relative overflow-x-auto w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Orientation
                </th>
                <th scope="col" className="px-6 py-3">
                  Pages
                </th>
                <th>
                  <div />
                </th>
              </tr>
            </thead>
            <tbody>
              {wizards.map((wizard, index) => (
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {index}
                  </th>
                  <td className="px-6 py-4">{wizard.name}</td>
                  <td className="px-6 py-4">{wizard.orientation}</td>
                  <td className="px-6 py-4">{wizard.pages.length}</td>
                  <td className="px-6 py-4">
                    <Button variant="link" className="uppercase">
                      Abrir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <p className="text-lg ">
            Parece que você ainda não criou nenhum wizard!
          </p>
          <p className="mb-8 text-center">
            Que tal começar a criar seu primeiro wizard agora?
          </p>
          <Button>Criar Wizard</Button>
        </div>
      )}
    </div>
  );
}
