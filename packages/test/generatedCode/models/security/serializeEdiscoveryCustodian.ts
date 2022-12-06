import {EdiscoveryCustodian} from './index';
import {serializeDataSourceContainer} from './serializeDataSourceContainer';
import {serializeEdiscoveryIndexOperation} from './serializeEdiscoveryIndexOperation';
import {serializeSiteSource} from './serializeSiteSource';
import {serializeUnifiedGroupSource} from './serializeUnifiedGroupSource';
import {serializeUserSource} from './serializeUserSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCustodian(writer: SerializationWriter, ediscoveryCustodian: EdiscoveryCustodian | undefined = {}) : void {
        serializeDataSourceContainer(writer, ediscoveryCustodian)
            writer.writeDateValue("acknowledgedDateTime", ediscoveryCustodian.acknowledgedDateTime);
            writer.writeStringValue("email", ediscoveryCustodian.email);
            writer.writeObjectValueFromMethod("lastIndexOperation", ediscoveryCustodian.lastIndexOperation as any, serializeEdiscoveryIndexOperation);
            writer.writeCollectionOfObjectValuesFromMethod("siteSources", ediscoveryCustodian.siteSources as any, serializeSiteSource);
            writer.writeCollectionOfObjectValuesFromMethod("unifiedGroupSources", ediscoveryCustodian.unifiedGroupSources as any, serializeUnifiedGroupSource);
            writer.writeCollectionOfObjectValuesFromMethod("userSources", ediscoveryCustodian.userSources as any, serializeUserSource);
}
