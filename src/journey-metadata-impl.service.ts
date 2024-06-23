import { JourneyMetadataService } from '@pv-frontend/pv-shared-services/journey-metadata-service';

import { allJourneyDetails } from './const/journey-info';

export class JourneyMetaDataServiceImpl extends JourneyMetadataService {
  public override getJourneyConfig(elementPath: string): object {
    return (
      elementPath
        .split('.')
        // COMMENT:  unable to set tyep for acc
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .reduce((acc: any, curr: string) => acc?.[curr], allJourneyDetails) ??
      {}
    );
  }
}
