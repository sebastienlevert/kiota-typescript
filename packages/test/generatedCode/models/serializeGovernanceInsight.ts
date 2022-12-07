import {GovernanceInsight} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGovernanceInsight(writer: SerializationWriter, governanceInsight: GovernanceInsight | undefined = {}) : void {
        serializeEntity(writer, governanceInsight)
            writer.writeDateValue("insightCreatedDateTime", governanceInsight.insightCreatedDateTime);
}
