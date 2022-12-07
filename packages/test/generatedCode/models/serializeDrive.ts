import {Drive} from './index';
import {serializeBaseItem} from './serializeBaseItem';
import {serializeDriveItem} from './serializeDriveItem';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeItemActivityOLD} from './serializeItemActivityOLD';
import {serializeList} from './serializeList';
import {serializeQuota} from './serializeQuota';
import {serializeSharepointIds} from './serializeSharepointIds';
import {serializeSystemFacet} from './serializeSystemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDrive(writer: SerializationWriter, drive: Drive | undefined = {}) : void {
        serializeBaseItem(writer, drive)
            writer.writeCollectionOfObjectValuesFromMethod("activities", drive.activities as any, serializeItemActivityOLD);
            writer.writeCollectionOfObjectValuesFromMethod("bundles", drive.bundles as any, serializeDriveItem);
            writer.writeStringValue("driveType", drive.driveType);
            writer.writeCollectionOfObjectValuesFromMethod("following", drive.following as any, serializeDriveItem);
            writer.writeCollectionOfObjectValuesFromMethod("items", drive.items as any, serializeDriveItem);
            writer.writeObjectValueFromMethod("list", drive.list as any, serializeList);
            writer.writeObjectValueFromMethod("owner", drive.owner as any, serializeIdentitySet);
            writer.writeObjectValueFromMethod("quota", drive.quota as any, serializeQuota);
            writer.writeObjectValueFromMethod("root", drive.root as any, serializeDriveItem);
            writer.writeObjectValueFromMethod("sharePointIds", drive.sharePointIds as any, serializeSharepointIds);
            writer.writeCollectionOfObjectValuesFromMethod("special", drive.special as any, serializeDriveItem);
            writer.writeObjectValueFromMethod("system", drive.system as any, serializeSystemFacet);
}
