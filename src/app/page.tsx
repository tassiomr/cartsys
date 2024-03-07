import { Button } from "@/components/ui/button";
import { Orientation, Wizard } from "@/types/wizard";

export default function Page() {
  const wizards: Wizard[] = Array.from({ length: 2 }, () => {
    return {
      name: "Wizard 1",
      pages: [],
      orientation: Orientation.horizontal,
    };
  });

  return (
    <div className="w-full h-full pt-[8rem] px-4 flex">
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
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
        // <div className="max-h-[400px] w-full overflow-y-auto overflow-x-scroll">
        //   <table className="table-auto w-full">
        //     <thead className="bg-primary pb-10 -b sticky top-0 border-b border-primary border-spacing-2">
        //       <tr>
        //         <td className="text-zinc-400 p-2 pr-4">Id</td>
        //         <td className="text-primary-foreground p-2 border-b border-primary">
        //           Name
        //         </td>
        //         <td className="text-primary-foreground p-2 border-b border-primary">
        //           Orientation
        //         </td>
        //         <td className="text-primary-foreground p-2 border-b border-primary">
        //           Pages
        //         </td>
        //       </tr>
        //     </thead>
        //     <div className="p-2" />
        //     <tbody>
        //       {wizards.map((wizard, index) => {
        //         return (
        //           <tr className="border-b border-bg-zinc-200 p-2" key={index}>
        //             <td>{index + 1}</td>
        //             <td>{wizard.name}</td>
        //             <td>{wizard.orientation}</td>
        //             <td>{wizard.pages.length}</td>
        //           </tr>
        //         );
        //       })}
        //     </tbody>
        //   </table>
        // </div>
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-lg text-gray-800 mb-4">
            Parece que você ainda não criou nenhum wizard!
          </p>
          <p className="text-gray-600 mb-8 text-center">
            Que tal começar a criar seu primeiro wizard agora?
          </p>
          <Button>Criar Wizard</Button>
        </div>
      )}
    </div>
  );
}
