import {AverageComparativeScore} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAverageComparativeScore(averageComparativeScore: AverageComparativeScore | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "averageScore": n => { averageComparativeScore.averageScore = n.getNumberValue() as any ; },
        "basis": n => { averageComparativeScore.basis = n.getStringValue() as any ; },
        "@odata.type": n => { averageComparativeScore.odataType = n.getStringValue() as any ; },
    }
}
