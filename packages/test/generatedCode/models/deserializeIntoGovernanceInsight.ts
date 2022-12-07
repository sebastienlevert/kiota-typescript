import {deserializeIntoEntity} from './deserializeIntoEntity';
import {GovernanceInsight} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGovernanceInsight(governanceInsight: GovernanceInsight | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(governanceInsight),
        "insightCreatedDateTime": n => { governanceInsight.insightCreatedDateTime = n.getDateValue() as any ; },
    }
}
