import {serializeIdentitySet} from '../serializeIdentitySet';
import {EdiscoveryCase} from './index';
import {serializeCase_escaped} from './serializeCase_escaped';
import {serializeCaseOperation} from './serializeCaseOperation';
import {serializeEdiscoveryCaseSettings} from './serializeEdiscoveryCaseSettings';
import {serializeEdiscoveryCustodian} from './serializeEdiscoveryCustodian';
import {serializeEdiscoveryNoncustodialDataSource} from './serializeEdiscoveryNoncustodialDataSource';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {serializeEdiscoveryReviewTag} from './serializeEdiscoveryReviewTag';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCase(writer: SerializationWriter, ediscoveryCase: EdiscoveryCase | undefined = {}) : void {
        serializeCase_escaped(writer, ediscoveryCase)
            writer.writeObjectValueFromMethod("closedBy", ediscoveryCase.closedBy as any, serializeIdentitySet);
            writer.writeDateValue("closedDateTime", ediscoveryCase.closedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("custodians", ediscoveryCase.custodians as any, serializeEdiscoveryCustodian);
            writer.writeStringValue("externalId", ediscoveryCase.externalId);
            writer.writeCollectionOfObjectValuesFromMethod("noncustodialDataSources", ediscoveryCase.noncustodialDataSources as any, serializeEdiscoveryNoncustodialDataSource);
            writer.writeCollectionOfObjectValuesFromMethod("operations", ediscoveryCase.operations as any, serializeCaseOperation);
            writer.writeCollectionOfObjectValuesFromMethod("reviewSets", ediscoveryCase.reviewSets as any, serializeEdiscoveryReviewSet);
            writer.writeCollectionOfObjectValuesFromMethod("searches", ediscoveryCase.searches as any, serializeEdiscoverySearch);
            writer.writeObjectValueFromMethod("settings", ediscoveryCase.settings as any, serializeEdiscoveryCaseSettings);
            writer.writeCollectionOfObjectValuesFromMethod("tags", ediscoveryCase.tags as any, serializeEdiscoveryReviewTag);
}
