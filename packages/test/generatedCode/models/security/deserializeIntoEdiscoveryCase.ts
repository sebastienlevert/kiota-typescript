import {deserializeIntoIdentitySet} from '../deserializeIntoIdentitySet';
import {deserializeIntoCase_escaped} from './deserializeIntoCase_escaped';
import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {deserializeIntoEdiscoveryCaseSettings} from './deserializeIntoEdiscoveryCaseSettings';
import {deserializeIntoEdiscoveryCustodian} from './deserializeIntoEdiscoveryCustodian';
import {deserializeIntoEdiscoveryNoncustodialDataSource} from './deserializeIntoEdiscoveryNoncustodialDataSource';
import {deserializeIntoEdiscoveryReviewSet} from './deserializeIntoEdiscoveryReviewSet';
import {deserializeIntoEdiscoveryReviewTag} from './deserializeIntoEdiscoveryReviewTag';
import {deserializeIntoEdiscoverySearch} from './deserializeIntoEdiscoverySearch';
import {EdiscoveryCase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryCase(ediscoveryCase: EdiscoveryCase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCase_escaped(ediscoveryCase),
        "closedBy": n => { ediscoveryCase.closedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "closedDateTime": n => { ediscoveryCase.closedDateTime = n.getDateValue() as any ; },
        "custodians": n => { ediscoveryCase.custodians = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryCustodian) as any ; },
        "externalId": n => { ediscoveryCase.externalId = n.getStringValue() as any ; },
        "noncustodialDataSources": n => { ediscoveryCase.noncustodialDataSources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryNoncustodialDataSource) as any ; },
        "operations": n => { ediscoveryCase.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCaseOperation) as any ; },
        "reviewSets": n => { ediscoveryCase.reviewSets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryReviewSet) as any ; },
        "searches": n => { ediscoveryCase.searches = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoverySearch) as any ; },
        "settings": n => { ediscoveryCase.settings = n.getObject(deserializeIntoEdiscoveryCaseSettings) as any ; },
        "tags": n => { ediscoveryCase.tags = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryReviewTag) as any ; },
    }
}
