function run() {
  const IGSF = IGStoriesToGDrive.getInstance();
  IGSF.batchFetch();
}

function createBadges() {
  const IGSF = IGStoriesToGDrive.getInstance();
  IGSF.createBadages();
}

function deleteSelected() {
  const IGSF = IGStoriesToGDrive.getInstance();
  IGSF.deleteSelected();
}

function runTestPipeline() {
  const IGSF = IGStoriesToGDrive.getInstance();
  IGSF.test_pipeline();
}
