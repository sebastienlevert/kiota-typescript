import {deserializeIntoDataSourceContainer} from './deserializeIntoDataSourceContainer';
import {deserializeIntoEdiscoveryIndexOperation} from './deserializeIntoEdiscoveryIndexOperation';
import {deserializeIntoSiteSource} from './deserializeIntoSiteSource';
import {deserializeIntoUnifiedGroupSource} from './deserializeIntoUnifiedGroupSource';
import {deserializeIntoUserSource} from './deserializeIntoUserSource';
import {EdiscoveryCustodian} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryCustodian(ediscoveryCustodian: EdiscoveryCustodian | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSourceContainer(ediscoveryCustodian),
        "acknowledgedDateTime": n => { ediscoveryCustodian.acknowledgedDateTime = n.getDateValue() as any ; },
        "email": n => { ediscoveryCustodian.email = n.getStringValue() as any ; },
        "lastIndexOperation": n => { ediscoveryCustodian.lastIndexOperation = n.getObject(deserializeIntoEdiscoveryIndexOperation) as any ; },
        "siteSources": n => { ediscoveryCustodian.siteSources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSiteSource) as any ; },
        "unifiedGroupSources": n => { ediscoveryCustodian.unifiedGroupSources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUnifiedGroupSource) as any ; },
        "userSources": n => { ediscoveryCustodian.userSources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserSource) as any ; },
    }
}
