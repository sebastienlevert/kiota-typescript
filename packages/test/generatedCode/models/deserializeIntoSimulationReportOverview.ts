import {deserializeIntoRecommendedAction} from './deserializeIntoRecommendedAction';
import {deserializeIntoSimulationEventsContent} from './deserializeIntoSimulationEventsContent';
import {deserializeIntoTrainingEventsContent} from './deserializeIntoTrainingEventsContent';
import {SimulationReportOverview} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationReportOverview(simulationReportOverview: SimulationReportOverview | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { simulationReportOverview.odataType = n.getStringValue() as any ; },
        "recommendedActions": n => { simulationReportOverview.recommendedActions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecommendedAction) as any ; },
        "resolvedTargetsCount": n => { simulationReportOverview.resolvedTargetsCount = n.getNumberValue() as any ; },
        "simulationEventsContent": n => { simulationReportOverview.simulationEventsContent = n.getObject(deserializeIntoSimulationEventsContent) as any ; },
        "trainingEventsContent": n => { simulationReportOverview.trainingEventsContent = n.getObject(deserializeIntoTrainingEventsContent) as any ; },
    }
}
