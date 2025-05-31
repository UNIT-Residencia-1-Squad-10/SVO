let currentStep = 1;
const totalSteps = 10;

function updateStep() {
  document.querySelectorAll('.step-content').forEach((el) => {
    el.classList.remove('active');
  });
  document.querySelector(`.step-content[data-step='${currentStep}']`).classList.add('active');

  document.querySelectorAll('.sidebar .step').forEach((el) => {
    el.classList.remove('active');
  });

  if(currentStep <= 1)
    document.getElementById('step-1').classList.add('active');
  if (currentStep <= 5 && currentStep>1) {   
    document.getElementById('step-2').classList.add('active');
  } else if (currentStep > 5 && currentStep <= 7) {
    document.getElementById('step-3').classList.add('active');
  } else if (currentStep > 7){
    document.getElementById('step-4').classList.add('active');
  }
}

function next() {
  if (currentStep < totalSteps) {
    currentStep++;
    updateStep();
  }
}
function previous() {

  if (currentStep < totalSteps) {
    currentStep--;
    updateStep();
  }
}
function mostrarAlerta() {
}

function esconderAlerta() {
}
function previousPlano() {
  alert('O serviço SVO é exclusivo pra quem não tem plano de saúde, o plano faz a verificação')
  if (currentStep < totalSteps) {
    currentStep--;
    updateStep();
  }
}
function previousHospOutro() {
    alert('O serviço SVO é exclusivo para óbitos que aconteceram dentro do imóvel')

  if (currentStep < totalSteps) {
    currentStep--;
    updateStep();
  }
}
function previousCausaExterna() {
  alert('O serviço SVO é exclusivo pra óbitos por causa natural')

  if (currentStep < totalSteps) {
    currentStep--;
    updateStep();
  }
}

updateStep();