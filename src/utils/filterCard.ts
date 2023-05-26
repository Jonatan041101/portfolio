import { Projects } from '@/app/types/types';
import { backendIcons } from '@/components/icons/TechsInformationId/backend';
import { controller } from '@/components/icons/TechsInformationId/controllers';
import { frontend } from '@/components/icons/TechsInformationId/frontend';
import { mobile } from '@/components/icons/TechsInformationId/mobile';

export const filterCard = (project: Projects | null | undefined) => {
  if (project === undefined || project === null) return;
  const frontendTech = frontend.filter(({ id }) =>
    project.techsFrontend?.includes(id),
  );
  const frontendMobile = mobile.filter(({ id }) =>
    project.techsFrontendMobile?.includes(id),
  );
  const backendTech = backendIcons.filter(({ id }) =>
    project.techsBackend.includes(id),
  );
  const controllerTech = controller.filter(({ id }) =>
    project.techsController.includes(id),
  );

  return {
    frontendTech,
    frontendMobile,
    backendTech,
    controllerTech,
  };
};
