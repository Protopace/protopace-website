import HubspotContactForm from "@/app/components/lib/hubspot-form";

export default async function Page() {

  return (
    <section className="center-contents bg-gray-50">
      <div className="flex flex-col items-center py-10 justify-center">
        <HubspotContactForm 
          region= "na1"
          portalId= "45273936"
          formId= "269a5963-a658-4b5b-9559-945a51f68643"
        />
      </div>
    </section>
  );
}
