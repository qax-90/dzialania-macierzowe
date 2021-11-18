document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    const matrixADimensionsSelect = document.getElementById('matrix-a-dimensions');
    const matrixABRowsSelect = document.getElementById('matrix-a-b-rows');
    const matrixABColsSelect = document.getElementById('matrix-a-b-cols');
    const matrixARowsSelect = document.getElementById('matrix-a-rows');
    const matrixAColsSelect = document.getElementById('matrix-a-cols');
    const matrixBColsSelect = document.getElementById('matrix-b-cols');
    const matrixAColsBRowsSelect = document.getElementById('matrix-a-cols-b-rows');
    const resizeMatrixAButton = document.getElementById('resize-matrix-a');
    const resizeMatrixBButton = document.getElementById('resize-matrix-b');
    const resizeMatrixABButton = document.getElementById('resize-matrix-a-b');
    const matrixARangeContainer = document.getElementById('matrix-a-range-container');
    const matrixBRangeContainer = document.getElementById('matrix-b-range-container');
    const matrixAFieldsContainer = document.getElementById('matrix-a-fields-container');
    const matrixBFieldsContainer = document.getElementById('matrix-b-fields-container');
    const numberBInput = document.getElementById('number-b');
    const matrixARangeFromInput = document.getElementById('matrix-a-range-from');
    const matrixARangeToInput = document.getElementById('matrix-a-range-to');
    const matrixBRangeFromInput = document.getElementById('matrix-b-range-from');
    const matrixBRangeToInput = document.getElementById('matrix-b-range-to');
    const numberBPrecisionInput = document.getElementById('number-b-precision');
    const matrixAPrecisionInput = document.getElementById('matrix-a-precision');
    const matrixBPrecisionInput = document.getElementById('matrix-b-precision');
    const calculationsPrecisionInput = document.getElementById('calculations-precision');
    const generateRandomMatrixAButton = document.getElementById('generate-random-matrix-a');
    const generateRandomMatrixBButton = document.getElementById('generate-random-matrix-b');
    const resetMatrixAButton = document.getElementById('reset-matrix-a');
    const resetMatrixBButton = document.getElementById('reset-matrix-b');
    const makeCalculationsButton = document.getElementById('make-calculations');
    const clearCalculationsButton = document.getElementById('clear-calculations');
    const inputDataDiv = document.getElementById('input-data');
    const calculationsResultDiv = document.getElementById('calculations-result');
    const calculationsTableBody = document.getElementById('calculations-table-body')

    const url = new URL(window.location.href);
    const page = url.searchParams.get('page');

    var matrixADimensionX = 4;
    var matrixADimensionY = 4;
    var matrixBDimensionX = 4;
    var matrixBDimensionY = 4;
    var matrixAPrecision = 1;
    var matrixAStep = 1;
    var matrixBPrecision = 1;
    var matrixBStep = 1;
    var matrixARangeFrom = 0;
    var matrixARangeTo = 10;
    var matrixBRangeFrom = 0;
    var matrixBRangeTo = 10;
    var numberB = 0;
    var numberBPrecision = 1000;
    var numberBStep = 0.001;
    var calculationsPrecision = 1000;
    var calculationsIndentationStep = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function resetMatrixA() {
      matrixA = new Array(10);
      for (let loop1 = 0; loop1 < matrixA.length; loop1++) {
        matrixA[loop1] = new Array(10);
        for (let loop2 = 0; loop2 < matrixA[loop1].length; loop2++) {
          matrixA[loop1][loop2] = 0;
        }
      }
    }

    function resetMatrixB() {
      matrixB = new Array(10);
      for (let loop1 = 0; loop1 < matrixB.length; loop1++) {
        matrixB[loop1] = new Array(10);
        for (let loop2 = 0; loop2 < matrixB[loop1].length; loop2++) {
          matrixB[loop1][loop2] = 0;
        }
      }
    }

    function rebuildMatrixA() {
      while (matrixAFieldsContainer.firstChild) {
        matrixAFieldsContainer.removeChild(matrixAFieldsContainer.firstChild);
      }
      let matrixATable = document.createElement('table');
      let matrixATableBody = document.createElement('tbody');
      matrixAFieldsContainer.appendChild(matrixATable);
      matrixATable.appendChild(matrixATableBody);
      for (let loop1 = 0; loop1 < matrixADimensionX; loop1++) {
        let matrixATableRow = document.createElement('tr');
        matrixATableBody.appendChild(matrixATableRow);
        for (let loop2 = 0; loop2 < matrixADimensionY; loop2++) {
          let matrixAValue = Math.round(matrixA[loop1][loop2] * matrixAPrecision) / matrixAPrecision;
          let matrixATableCell = document.createElement('td');
          let matrixAFieldInput = document.createElement('input');
          matrixAFieldInput.setAttribute('type', 'number');
          matrixAFieldInput.setAttribute('step', matrixAStep);
          matrixAFieldInput.setAttribute('data-matrix-a-row', loop1);
          matrixAFieldInput.setAttribute('data-matrix-a-column', loop2);
          matrixAFieldInput.value = matrixAValue;
          matrixAFieldInput.addEventListener('change', function() {
            matrixA[this.getAttribute('data-matrix-a-row')][this.getAttribute('data-matrix-a-column')] = parseFloat(this.value);
          });
          matrixATableRow.appendChild(matrixATableCell);
          matrixATableCell.appendChild(matrixAFieldInput);
        }
      }
    }

    function rebuildMatrixB() {
      while (matrixBFieldsContainer.firstChild) {
        matrixBFieldsContainer.removeChild(matrixBFieldsContainer.firstChild);
      }
      let matrixBTable = document.createElement('table');
      let matrixBTableBody = document.createElement('tbody');
      matrixBFieldsContainer.appendChild(matrixBTable);
      matrixBTable.appendChild(matrixBTableBody);
      for (let loop1 = 0; loop1 < matrixBDimensionX; loop1++) {
        let matrixBTableRow = document.createElement('tr');
        matrixBTableBody.appendChild(matrixBTableRow);
        for (let loop2 = 0; loop2 < matrixBDimensionY; loop2++) {
          let matrixBValue = Math.round(matrixB[loop1][loop2] * matrixBPrecision) / matrixBPrecision;
          let matrixBTableCell = document.createElement('td');
          let matrixBFieldInput = document.createElement('input');
          matrixBFieldInput.setAttribute('type', 'number');
          matrixBFieldInput.setAttribute('step', matrixBStep);
          matrixBFieldInput.setAttribute('data-matrix-b-row', loop1);
          matrixBFieldInput.setAttribute('data-matrix-b-column', loop2);
          matrixBFieldInput.value = matrixBValue;
          matrixBFieldInput.addEventListener('change', function() {
            matrixB[this.getAttribute('data-matrix-b-row')][this.getAttribute('data-matrix-b-column')] = parseFloat(this.value);
          });
          matrixBTableRow.appendChild(matrixBTableCell);
          matrixBTableCell.appendChild(matrixBFieldInput);
        }
      }
    }

    function stepIndentation(rowIndentation) {
      let step = '';
      for (let loop = 0; loop <= rowIndentation; loop++) {
        step += calculationsIndentationStep[loop] + '.';
      }
      return step;
    }

    function determinant(inputMatrix, dim, rowIndentation) {
      let det = 0;
      let subMatrix = new Array(10);
      for (let loop1 = 0; loop1 < subMatrix.length; loop1++) {
        subMatrix[loop1] = new Array(10);
        for (let loop2 = 0; loop2 < subMatrix[loop1].length; loop2++) {
          subMatrix[loop1][loop2] = 0;
        }
      }
      if (dim == 1) {
        return inputMatrix[0][0];
      }
      if (dim == 2) {
        return ((inputMatrix[0][0] * inputMatrix[1][1]) - (inputMatrix[1][0] * inputMatrix[0][1]));
      }
      for (let loop1 = 0; loop1 !== dim; loop1++) {
        let subi = 0;
        for (let loop2 = 1; loop2 !== dim; loop2++) {
          let subj = 0;
          for (let loop3 = 0; loop3 !== dim; loop3++) {
            if (loop3 === loop1) {
              continue;
            }
            subMatrix[subi][subj] = inputMatrix[loop2][loop3];
            subj++;
          }
          subi++;
        }
        let prevDet = det;
        det += Math.pow(-1, loop1) * inputMatrix[0][loop1] * determinant(subMatrix, dim - 1, null);
        if (rowIndentation != null) {
          for (let loop = rowIndentation + 1; loop < 10; loop++) {
            calculationsIndentationStep[loop] = 0;
          }
          calculationsIndentationStep[rowIndentation] = calculationsIndentationStep[rowIndentation] + 1;
          let calculationsRowTable = document.createElement('tr');
          let calculationsTd1Table = document.createElement('td');
          calculationsRowTable.appendChild(calculationsTd1Table);
          let calculationsTd2Table = document.createElement('td');
          calculationsRowTable.appendChild(calculationsTd2Table);
          let stepTitleStrong = document.createElement('strong');
          stepTitleStrong.innerText = 'Krok ' + stepIndentation(rowIndentation);
          calculationsTd1Table.appendChild(stepTitleStrong);
          let minusOneSpan = document.createElement('span');
          minusOneSpan.innerText = ' ' + (Math.round(prevDet * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',') + ' + (-1)';
          calculationsTd2Table.appendChild(minusOneSpan);
          let superscriptSup = document.createElement('sup');
          superscriptSup.innerText = loop1.toString();
          calculationsTd2Table.appendChild(superscriptSup);
          let timesSpan = document.createElement('span');
          timesSpan.innerHTML = ' &times; ' + inputMatrix[0][loop1].toString().replace('.', ',') + ' &times ';
          calculationsTd2Table.appendChild(timesSpan);
          let variableVar = document.createElement('var');
          variableVar.innerText = 'det';
          calculationsTd2Table.appendChild(variableVar);
          let calcMatrixFieldsContainer = document.createElement('div');
          calcMatrixFieldsContainer.className = 'calc-matrix-fields-container';
          calculationsTd2Table.appendChild(calcMatrixFieldsContainer);
          let calcMatrixTable = document.createElement('table');
          calcMatrixFieldsContainer.appendChild(calcMatrixTable);
          let calcMatrixTableBody = document.createElement('tbody');
          calcMatrixTable.appendChild(calcMatrixTableBody);
          for (let loop1b = 0; loop1b < dim - 1; loop1b++) {
            var calcMatrixTableRow = document.createElement('tr');
            calcMatrixTableBody.appendChild(calcMatrixTableRow);
            for (let loop2b = 0; loop2b < dim - 1; loop2b++) {
              let value = Math.round(subMatrix[loop1b][loop2b] * matrixAPrecision) / matrixAPrecision;
              let calcMatrixTableCell = document.createElement('td');
              calcMatrixTableCell.innerText = value.toString().replace('.', ',');
              calcMatrixTableRow.appendChild(calcMatrixTableCell);
            }
          }
          let resultSpan = document.createElement('span');
          let resultPart1 = Math.pow(-1, loop1) * inputMatrix[0][loop1];
          let resultPart2;
          if (dim - 1 === 2) {
            resultPart2 = '(' + (Math.round(subMatrix[0][0] * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',') + ' &times ' + ((subMatrix[1][1] < 0) ? '(' + (Math.round(subMatrix[1][1] * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',') + ')' :  (Math.round(subMatrix[1][1] * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',')) + ' - ' + ((subMatrix[1][0] < 0) ? ('(' + Math.round(subMatrix[1][0] * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',') + ')' :  (Math.round(subMatrix[1][0] * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',')) + ' &times ' + ((subMatrix[0][1] < 0) ? ('(' + Math.round(subMatrix[0][1] * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',') + ')' : (Math.round(subMatrix[0][1] * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',')) + ')';
          } else {
            let subMatrixDet = determinant(subMatrix, dim - 1, null);
            resultPart2 = (subMatrixDet < 0) ? '(' + (Math.round(subMatrixDet * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',') + ')' : Math.round((subMatrixDet * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',');
          }
          resultSpan.innerHTML = '= ' + ((prevDet < 0) ? ('(' + (Math.round(prevDet * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',') + ')') : (Math.round(prevDet * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',')) + ' + ' + ((resultPart1 < 0) ? '(' + resultPart1.toString().replace('.', ',') + ')' : resultPart1.toString().replace('.', ',')) + ' &times ' + resultPart2  + ' = ' + ((det < 0) ? '(' + (Math.round(det * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',') + ')' : (Math.round(det * calculationsPrecision) / calculationsPrecision).toString().replace('.', ','));
          calculationsTd2Table.appendChild(resultSpan);
          calculationsTableBody.appendChild(calculationsRowTable);
          determinant(subMatrix, dim - 1, rowIndentation + 1);
        }
      }
      return det;
    }

    if (!!resizeMatrixAButton) {
      resizeMatrixAButton.addEventListener('click', function() {
        if (window.confirm('Czy na pewno chcesz zmienić rozmiar macierzy A? Podczas jej zmniejszania może nastąpić częściowa utrata dotychczasowych danych!')) {
          if (page == 'determinant') {
            matrixADimensionX = parseInt(matrixADimensionsSelect.value);
            matrixADimensionY = parseInt(matrixADimensionsSelect.value);
          } else if (page == 'bynumber') {
            matrixADimensionX = parseInt(matrixARowsSelect.value);
            matrixADimensionY = parseInt(matrixAColsSelect.value);
          }
          let matrixDimension = parseInt((matrixADimensionX + matrixADimensionY) / 2);
          let matrixCopy = new Array(matrixDimension);
          for (let loop1 = 0; loop1 < matrixCopy.length; loop1++) {
            matrixCopy[loop1] = new Array(matrixDimension);
            for (let loop2 = 0; loop2 < matrixCopy[loop1].length; loop2++) {
              matrixCopy[loop1][loop2] = matrixA[loop1][loop2];
            }
          }
          resetMatrixA();
          for (let loop1 = 0; loop1 < matrixCopy.length; loop1++) {
            for (let loop2 = 0; loop2 < matrixCopy[loop1].length; loop2++) {
              matrixA[loop1][loop2] = matrixCopy[loop1][loop2];
            }
          }
          rebuildMatrixA();
        }
      }, false);
    }

    if (!!resizeMatrixABButton) {
      resizeMatrixABButton.addEventListener('click', function() {
        if (window.confirm('Czy na pewno chcesz zmienić rozmiar macierzy A i B? Podczas ich zmniejszania może nastąpić częściowa utrata dotychczasowych danych!')) {
          if (page == 'addition' || page == 'subtraction') {
            matrixADimensionX = parseInt(matrixABRowsSelect.value);
            matrixADimensionY = parseInt(matrixABColsSelect.value);
            matrixBDimensionX = parseInt(matrixABRowsSelect.value);
            matrixBDimensionY = parseInt(matrixABColsSelect.value);
          } else if (page == 'multiplication') {
            matrixADimensionX = parseInt(matrixARowsSelect.value);
            matrixADimensionY = parseInt(matrixAColsBRowsSelect.value);
            matrixBDimensionX = parseInt(matrixAColsBRowsSelect.value);
            matrixBDimensionY = parseInt(matrixBColsSelect.value);
          }
          let matrixACopy = new Array(matrixADimensionX);
          for (let loop1 = 0; loop1 < matrixACopy.length; loop1++) {
            matrixACopy[loop1] = new Array(matrixADimensionY);
            for (let loop2 = 0; loop2 < matrixACopy[loop1].length; loop2++) {
              matrixACopy[loop1][loop2] = matrixA[loop1][loop2];
            }
          }
          let matrixBCopy = new Array(matrixBDimensionX);
          for (let loop1 = 0; loop1 < matrixBCopy.length; loop1++) {
            matrixBCopy[loop1] = new Array(matrixBDimensionY);
            for (let loop2 = 0; loop2 < matrixBCopy[loop1].length; loop2++) {
              matrixBCopy[loop1][loop2] = matrixB[loop1][loop2];
            }
          }
          resetMatrixA();
          resetMatrixB();
          for (let loop1 = 0; loop1 < matrixACopy.length; loop1++) {
            for (let loop2 = 0; loop2 < matrixACopy[loop1].length; loop2++) {
              matrixA[loop1][loop2] = matrixACopy[loop1][loop2];
            }
          }
          for (let loop1 = 0; loop1 < matrixBCopy.length; loop1++) {
            for (let loop2 = 0; loop2 < matrixBCopy[loop1].length; loop2++) {
              matrixB[loop1][loop2] = matrixBCopy[loop1][loop2];
            }
          }
          rebuildMatrixA();
          rebuildMatrixB();
        }
      }, false);
    }

    if (!!numberBInput) {
      numberBInput.addEventListener('change', function() {
        numberB = parseFloat(this.value);
      });
    }

    if (!!numberBPrecisionInput) {
      numberBPrecisionInput.addEventListener('change', function() {
        numberBPrecision = Math.pow(10, parseInt(numberBPrecisionInput.value));
        numberBStep = Math.round(Math.pow(10, -(parseInt(numberBPrecisionInput.value))) * numberBPrecision) / numberBPrecision;
        let numberBValue = Math.round(numberB * numberBPrecision) / numberBPrecision;
        numberBInput.setAttribute('step', numberBStep);
        numberBInput.value = numberBValue;
      });
    }

    if (!!matrixAPrecisionInput) {
      matrixAPrecisionInput.addEventListener('change', function() {
        matrixAPrecision = Math.pow(10, parseInt(matrixAPrecisionInput.value));
        matrixAStep = Math.pow(10, -(parseInt(matrixAPrecisionInput.value)));
        matrixARangeContainer.setAttribute('data-matrix-a-range-size', parseInt(matrixAPrecisionInput.value));
        var matrixARangeFromInputValue = Math.round(matrixARangeFrom * matrixAPrecision) / matrixAPrecision;
        var matrixARangeToInputValue = Math.round(matrixARangeTo * matrixAPrecision) / matrixAPrecision;
        matrixARangeFromInput.setAttribute('step', matrixAStep);
        matrixARangeToInput.setAttribute('step', matrixAStep);
        matrixARangeFromInput.value = matrixARangeFromInputValue;
        matrixARangeToInput.value = matrixARangeToInputValue;
        matrixAFieldsContainer.setAttribute('data-matrix-a-fields-size', parseInt(matrixAPrecisionInput.value));
        let matrixAFieldInputs = matrixAFieldsContainer.querySelectorAll('input[data-matrix-a-row][data-matrix-a-column]');
        for (let loop = 0; loop < matrixAFieldInputs.length; loop++) {
          var matrixAValue = Math.round(matrixA[matrixAFieldInputs[loop].getAttribute('data-matrix-a-row')][matrixAFieldInputs[loop].getAttribute('data-matrix-a-column')] * matrixAPrecision) / matrixAPrecision;
          matrixAFieldInputs[loop].setAttribute('step', matrixAStep);
          matrixAFieldInputs[loop].value=  matrixAValue;
        }
      });
    }

    if (!!matrixBPrecisionInput) {
      matrixBPrecisionInput.addEventListener('change', function() {
        matrixBPrecision = Math.pow(10, parseInt(matrixBPrecisionInput.value));
        matrixBStep = Math.pow(10, -(parseInt(matrixBPrecisionInput.value)));
        matrixBRangeContainer.setAttribute('data-matrix-b-range-size', parseInt(matrixBPrecisionInput.value));
        var matrixBRangeFromInputValue = Math.round(matrixBRangeFrom * matrixBPrecision) / matrixBPrecision;
        var matrixBRangeToInputValue = Math.round(matrixBRangeTo * matrixBPrecision) / matrixBPrecision;
        matrixBRangeFromInput.setAttribute('step', matrixBStep);
        matrixBRangeToInput.setAttribute('step', matrixBStep);
        matrixBRangeFromInput.value = matrixBRangeFromInputValue;
        matrixBRangeToInput.value = matrixBRangeToInputValue;
        matrixBFieldsContainer.setAttribute('data-matrix-b-fields-size', parseInt(matrixBPrecisionInput.value));
        let matrixBFieldInputs = matrixBFieldsContainer.querySelectorAll('input[data-matrix-b-row][data-matrix-b-column]');
        for (let loop = 0; loop < matrixBFieldInputs.length; loop++) {
          var matrixBValue = Math.round(matrixB[matrixBFieldInputs[loop].getAttribute('data-matrix-b-row')][matrixBFieldInputs[loop].getAttribute('data-matrix-b-column')] * matrixBPrecision) / matrixBPrecision;
          matrixBFieldInputs[loop].setAttribute('step', matrixBStep);
          matrixBFieldInputs[loop].value = matrixBValue;
        }
      });
    }

    if (!!matrixARangeFromInput) {
      matrixARangeFromInput.addEventListener('change', function() {
        matrixARangeFrom = parseFloat(this.value);
      });
    }

    if (!!matrixARangeToInput) {
      matrixARangeToInput.addEventListener('change', function() {
        matrixARangeTo = parseFloat(this.value);
      });
    }

    if (!!matrixBRangeFromInput) {
      matrixBRangeFromInput.addEventListener('change', function() {
        matrixBRangeFrom = parseFloat(this.value);
      });
    }

    if (!!matrixBRangeToInput) {
      matrixBRangeToInput.addEventListener('change', function() {
        matrixBRangeTo = parseFloat(this.value);
      });
    }

    if (!!calculationsPrecisionInput) {
      calculationsPrecisionInput.addEventListener('change', function() {
        calculationsPrecision = Math.pow(10, parseInt(calculationsPrecisionInput.value));
      });
    }

    if (!!generateRandomMatrixAButton) {
      generateRandomMatrixAButton.addEventListener('click', function() {
        if (window.confirm('Czy na pewno chcesz wygenerować nową losową macierz A? Wszystkie dotychczasowe dane zostaną utracone!')) {
          let min = parseFloat(matrixARangeFromInput.value);
          let max = parseFloat(matrixARangeToInput.value);
          for (let loop1 = 0; loop1 < matrixADimensionX; loop1++) {
            for (let loop2 = 0; loop2 < matrixADimensionY; loop2++) {
              matrixA[loop1][loop2] = Math.round(((Math.random() * (max - min)) + min) * matrixAPrecision) / matrixAPrecision;
            }
          }
          rebuildMatrixA();
        }
      }, false);
    }

    if (!!generateRandomMatrixBButton) {
      generateRandomMatrixBButton.addEventListener('click', function() {
        if (window.confirm('Czy na pewno chcesz wygenerować nową losową macierz B? Wszystkie dotychczasowe dane zostaną utracone!')) {
          let min = parseFloat(matrixBRangeFromInput.value);
          let max = parseFloat(matrixBRangeToInput.value);
          for (let loop1 = 0; loop1 < matrixBDimensionX; loop1++) {
            for (let loop2 = 0; loop2 < matrixBDimensionY; loop2++) {
              matrixB[loop1][loop2] = Math.round(((Math.random() * (max - min)) + min) * matrixBPrecision) / matrixBPrecision;
            }
          }
          rebuildMatrixB();
        }
      }, false);
    }

    if (!!resetMatrixAButton) {
      resetMatrixAButton.addEventListener('click', function() {
        if (window.confirm('Czy na pewno chcesz zresetować macierz A? Wszystkie dotychczasowe dane zostaną utracone!')) {
          resetMatrixA();
          rebuildMatrixA();
        }
      }, false);
    }

    if (!!resetMatrixBButton) {
      resetMatrixBButton.addEventListener('click', function() {
        if (window.confirm('Czy na pewno chcesz zresetować macierz B? Wszystkie dotychczasowe dane zostaną utracone!')) {
          resetMatrixB();
          rebuildMatrixB();
        }
      }, false);
    }

    if (!!makeCalculationsButton) {
      makeCalculationsButton.addEventListener('click', function() {
        makeCalculationsButton.setAttribute('disabled', 'disabled');
        if (page == 'determinant') {
          let inputMatrixTable = document.createElement('table');
          let inputMatrixFieldsContainer = document.createElement('div');
          inputMatrixFieldsContainer.className = 'calc-matrix-fields-container';
          inputMatrixFieldsContainer.appendChild(inputMatrixTable);
          let inputMatrixTableBody = document.createElement('tbody');
          inputMatrixTable.appendChild(inputMatrixTableBody);
          let matrixDimension = parseInt((matrixADimensionX + matrixADimensionY) / 2);
          let matrixCopy = new Array(matrixDimension);
          for (let loop1 = 0; loop1 < matrixCopy.length; loop1++) {
            matrixCopy[loop1] = new Array(matrixDimension);
            let inputMatrixTableRow = document.createElement('tr');
            inputMatrixTableBody.appendChild(inputMatrixTableRow);
            for (let loop2 = 0; loop2 < matrixCopy[loop1].length; loop2++) {
              matrixCopy[loop1][loop2] = Math.round(matrixA[loop1][loop2] * matrixAPrecision) / matrixAPrecision;
              let value = matrixCopy[loop1][loop2];
              let inputMatrixTableCell = document.createElement('td');
              inputMatrixTableCell.innerText = value.toString().replace('.', ',');
              inputMatrixTableRow.appendChild(inputMatrixTableCell);
            }
          }
          let result = Math.round(determinant(matrixCopy, matrixDimension, 0) * calculationsPrecision) / calculationsPrecision;
          let variableVar = document.createElement('var');
          variableVar.innerText = 'det A';
          let equalChar = document.createElement('span');
          equalChar.innerText = ' = ';
          let variableVar2 = document.createElement('var');
          variableVar2.innerText = 'det';
          inputDataDiv.appendChild(variableVar);
          inputDataDiv.appendChild(equalChar);
          inputDataDiv.appendChild(variableVar2);
          inputDataDiv.appendChild(inputMatrixFieldsContainer);
          calculationsTableBody.parentElement.style.display = 'table';
          calculationsResultDiv.innerText = 'Wynik: ' + result.toString().replace('.', ',');
        } else if (page == 'addition' || page == 'subtraction') {
          let inputMatrixAContainer = document.createElement('div');
          let inputMatrixBContainer = document.createElement('div');
          let outputCalculationsContainer = document.createElement('div');
          let outputMatrixCContainer = document.createElement('div');
          inputMatrixAContainer.className = 'input-container';
          inputMatrixBContainer.className = 'input-container';
          outputCalculationsContainer.className = 'output-container';
          outputMatrixCContainer.className = 'output-container';
          let matrixAVar = document.createElement('var');
          matrixAVar.innerText = 'A';
          inputMatrixAContainer.appendChild(matrixAVar);
          let matrixBVar = document.createElement('var');
          matrixBVar.innerText = 'B';
          inputMatrixBContainer.appendChild(matrixBVar);
          let matrixCVar2 = document.createElement('var');
          matrixCVar2.innerText = 'C';
          outputCalculationsContainer.appendChild(matrixCVar2);
          let matrixCVar3 = document.createElement('var');
          matrixCVar3.innerText = 'C';
          outputMatrixCContainer.appendChild(matrixCVar3);
          let matrixEqualChar = document.createElement('span');
          matrixEqualChar.innerText = ' = ';
          inputMatrixAContainer.appendChild(matrixEqualChar);
          let matrixEqualChar2 = document.createElement('span');
          matrixEqualChar2.innerText = ' = ';
          inputMatrixBContainer.appendChild(matrixEqualChar2);
          let matrixEqualChar3 = document.createElement('span');
          matrixEqualChar3.innerText = ' = ';
          outputCalculationsContainer.appendChild(matrixEqualChar3);
          let matrixEqualChar4 = document.createElement('span');
          matrixEqualChar4.innerText = ' = ';
          outputMatrixCContainer.appendChild(matrixEqualChar4);
          let matrixAVar2 = document.createElement('var');
          matrixAVar2.innerText = 'A';
          outputCalculationsContainer.appendChild(matrixAVar2);
          if (page == 'addition') {
            let matrixPlusChar = document.createElement('span');
            matrixPlusChar.innerText = ' + ';
            outputCalculationsContainer.appendChild(matrixPlusChar);
          } else if (page == 'subtraction') {
            let matrixMinusChar = document.createElement('span');
            matrixMinusChar.innerText = ' - ';
            outputCalculationsContainer.appendChild(matrixMinusChar);
          }
          let matrixBVar2 = document.createElement('var');
          matrixBVar2.innerText = 'B';
          outputCalculationsContainer.appendChild(matrixBVar2);
          let matrixEqualChar5 = document.createElement('span');
          matrixEqualChar5.innerText = ' = ';
          outputCalculationsContainer.appendChild(matrixEqualChar5);
          let inputMatrixAFieldsContainer = document.createElement('div');
          let inputMatrixBFieldsContainer = document.createElement('div');
          let outputMatrixCFieldsContainer = document.createElement('div');
          let outputCalculationsFieldsContainer = document.createElement('div');
          inputMatrixAContainer.appendChild(inputMatrixAFieldsContainer);
          inputMatrixBContainer.appendChild(inputMatrixBFieldsContainer);
          outputMatrixCContainer.appendChild(outputMatrixCFieldsContainer);
          outputCalculationsContainer.appendChild(outputCalculationsFieldsContainer);
          let inputMatrixATable = document.createElement('table');
          let inputMatrixBTable = document.createElement('table');
          let outputMatrixCTable = document.createElement('table');
          let outputCalculationsTable = document.createElement('table');
          inputMatrixAFieldsContainer.className = 'calc-matrix-fields-container';
          inputMatrixBFieldsContainer.className = 'calc-matrix-fields-container';
          outputMatrixCFieldsContainer.className = 'calc-matrix-fields-container';
          outputCalculationsFieldsContainer.className = 'calc-matrix-fields-container';
          inputMatrixAFieldsContainer.appendChild(inputMatrixATable);
          inputMatrixBFieldsContainer.appendChild(inputMatrixBTable);
          outputMatrixCFieldsContainer.appendChild(outputMatrixCTable);
          outputCalculationsFieldsContainer.appendChild(outputCalculationsTable);
          let inputMatrixATableBody = document.createElement('tbody');
          let inputMatrixBTableBody = document.createElement('tbody');
          let outputMatrixCTableBody = document.createElement('tbody');
          let outputCalculationsTableBody = document.createElement('tbody');
          inputMatrixATable.appendChild(inputMatrixATableBody);
          inputMatrixBTable.appendChild(inputMatrixBTableBody);
          outputMatrixCTable.appendChild(outputMatrixCTableBody);
          outputCalculationsTable.appendChild(outputCalculationsTableBody);
          let matrixDimensionX = parseInt((matrixADimensionX + matrixBDimensionX) / 2);
          let matrixDimensionY = parseInt((matrixADimensionY + matrixBDimensionY) / 2);
          let matrixACopy = new Array(matrixDimensionX);
          let matrixBCopy = new Array(matrixDimensionX);
          let matrixC = new Array(matrixDimensionX);
          let calculationsMatrixFieldString = '';
          for (let loop1 = 0; loop1 < matrixDimensionX; loop1++) {
            matrixACopy[loop1] = new Array(matrixDimensionY);
            matrixBCopy[loop1] = new Array(matrixDimensionY);
            matrixC[loop1] = new Array(matrixDimensionY);
            let inputMatrixATableRow = document.createElement('tr');
            let inputMatrixBTableRow = document.createElement('tr');
            let outputCalculationsTableRow = document.createElement('tr');
            let outputMatrixCTableRow = document.createElement('tr');
            inputMatrixATableBody.appendChild(inputMatrixATableRow);
            inputMatrixBTableBody.appendChild(inputMatrixBTableRow);
            outputCalculationsTableBody.appendChild(outputCalculationsTableRow);
            outputMatrixCTableBody.appendChild(outputMatrixCTableRow);
            for (let loop2 = 0; loop2 < matrixDimensionY; loop2++) {
              matrixACopy[loop1][loop2] = matrixA[loop1][loop2];
              matrixBCopy[loop1][loop2] = matrixB[loop1][loop2];
              if (page == 'addition') {
                matrixC[loop1][loop2] = matrixACopy[loop1][loop2] + matrixBCopy[loop1][loop2];
                calculationsMatrixFieldString = '(' + (Math.round(matrixACopy[loop1][loop2] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',') + ' + ' + ((matrixBCopy[loop1][loop2] < 0) ? '(' + (Math.round(matrixBCopy[loop1][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ',') + ')' :  (Math.round(matrixBCopy[loop1][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ',')) + ')';
              } else if (page == 'subtraction') {
                matrixC[loop1][loop2] = matrixACopy[loop1][loop2] - matrixBCopy[loop1][loop2];
                calculationsMatrixFieldString = '(' + (Math.round(matrixACopy[loop1][loop2] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',') + ' - ' + ((matrixBCopy[loop1][loop2] < 0) ? '(' + (Math.round(matrixBCopy[loop1][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ',') + ')' :  (Math.round(matrixBCopy[loop1][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ',')) + ')';
              }
              let matrixAValue = Math.round(matrixACopy[loop1][loop2] * matrixAPrecision) / matrixAPrecision;
              let matrixBValue = Math.round(matrixBCopy[loop1][loop2] * matrixBPrecision) / matrixBPrecision;
              let matrixCValue = Math.round(matrixC[loop1][loop2] * calculationsPrecision) / calculationsPrecision;
              let inputMatrixATableCell = document.createElement('td');
              let inputMatrixBTableCell = document.createElement('td');
              let outputCalculationsTableCell = document.createElement('td');
              let outputMatrixCTableCell = document.createElement('td');
              inputMatrixATableCell.innerText = matrixAValue.toString().replace('.', ',');
              inputMatrixBTableCell.innerText = matrixBValue.toString().replace('.', ',');
              outputCalculationsTableCell.innerText = calculationsMatrixFieldString;
              outputMatrixCTableCell.innerText = matrixCValue.toString().replace('.', ',');
              inputMatrixATableRow.appendChild(inputMatrixATableCell);
              inputMatrixBTableRow.appendChild(inputMatrixBTableCell);
              outputCalculationsTableRow.appendChild(outputCalculationsTableCell);
              outputMatrixCTableRow.appendChild(outputMatrixCTableCell);
            }
          }
          inputDataDiv.appendChild(inputMatrixAContainer);
          inputDataDiv.appendChild(inputMatrixBContainer);
          inputDataDiv.appendChild(outputCalculationsContainer);
          calculationsTableBody.parentElement.style.display = 'none';
          calculationsResultDiv.innerHTML = 'Wynik:<br />';
          calculationsResultDiv.appendChild(outputMatrixCContainer);
        } else if (page == 'multiplication') {
          let stepNumber = 0;
          let inputMatrixAContainer = document.createElement('div');
          let inputMatrixBContainer = document.createElement('div');
          let outputCalculationsContainer = document.createElement('div');
          let outputMatrixCContainer = document.createElement('div');
          inputMatrixAContainer.className = 'input-container';
          inputMatrixBContainer.className = 'input-container';
          outputCalculationsContainer.className = 'output-container';
          outputMatrixCContainer.className = 'output-container';
          let matrixAVar = document.createElement('var');
          matrixAVar.innerText = 'A';
          inputMatrixAContainer.appendChild(matrixAVar);
          let matrixBVar = document.createElement('var');
          matrixBVar.innerText = 'B';
          inputMatrixBContainer.appendChild(matrixBVar);
          let matrixCVar2 = document.createElement('var');
          matrixCVar2.innerText = 'C';
          outputCalculationsContainer.appendChild(matrixCVar2);
          let matrixCVar3 = document.createElement('var');
          matrixCVar3.innerText = 'C';
          outputMatrixCContainer.appendChild(matrixCVar3);
          let matrixEqualChar = document.createElement('span');
          matrixEqualChar.innerText = ' = ';
          inputMatrixAContainer.appendChild(matrixEqualChar);
          let matrixEqualChar2 = document.createElement('span');
          matrixEqualChar2.innerText = ' = ';
          inputMatrixBContainer.appendChild(matrixEqualChar2);
          let matrixEqualChar3 = document.createElement('span');
          matrixEqualChar3.innerText = ' = ';
          outputCalculationsContainer.appendChild(matrixEqualChar3);
          let matrixEqualChar4 = document.createElement('span');
          matrixEqualChar4.innerText = ' = ';
          outputMatrixCContainer.appendChild(matrixEqualChar4);
          let matrixAVar2 = document.createElement('var');
          matrixAVar2.innerText = 'A';
          outputCalculationsContainer.appendChild(matrixAVar2);
          let matrixTimesChar = document.createElement('span');
          matrixTimesChar.innerHTML = ' &times; ';
          outputCalculationsContainer.appendChild(matrixTimesChar);
          let matrixBVar2 = document.createElement('var');
          matrixBVar2.innerText = 'B';
          outputCalculationsContainer.appendChild(matrixBVar2);
          let matrixEqualChar5 = document.createElement('span');
          matrixEqualChar5.innerText = ' = ';
          outputCalculationsContainer.appendChild(matrixEqualChar5);
          let inputMatrixAFieldsContainer = document.createElement('div');
          let inputMatrixBFieldsContainer = document.createElement('div');
          let outputMatrixCFieldsContainer = document.createElement('div');
          let outputCalculationsFieldsContainer = document.createElement('div');
          inputMatrixAContainer.appendChild(inputMatrixAFieldsContainer);
          inputMatrixBContainer.appendChild(inputMatrixBFieldsContainer);
          outputMatrixCContainer.appendChild(outputMatrixCFieldsContainer);
          outputCalculationsContainer.appendChild(outputCalculationsFieldsContainer);
          let inputMatrixATable = document.createElement('table');
          let inputMatrixBTable = document.createElement('table');
          let outputMatrixCTable = document.createElement('table');
          let outputCalculationsTable = document.createElement('table');
          inputMatrixAFieldsContainer.className = 'calc-matrix-fields-container';
          inputMatrixBFieldsContainer.className = 'calc-matrix-fields-container';
          outputMatrixCFieldsContainer.className = 'calc-matrix-fields-container';
          outputCalculationsFieldsContainer.className = 'calc-matrix-fields-container';
          inputMatrixAFieldsContainer.appendChild(inputMatrixATable);
          inputMatrixBFieldsContainer.appendChild(inputMatrixBTable);
          outputMatrixCFieldsContainer.appendChild(outputMatrixCTable);
          outputCalculationsFieldsContainer.appendChild(outputCalculationsTable);
          let inputMatrixATableBody = document.createElement('tbody');
          let inputMatrixBTableBody = document.createElement('tbody');
          let outputMatrixCTableBody = document.createElement('tbody');
          let outputCalculationsTableBody = document.createElement('tbody');
          inputMatrixATable.appendChild(inputMatrixATableBody);
          inputMatrixBTable.appendChild(inputMatrixBTableBody);
          outputMatrixCTable.appendChild(outputMatrixCTableBody);
          outputCalculationsTable.appendChild(outputCalculationsTableBody);
          let matrixACopy = new Array(matrixADimensionX);
          let matrixBCopy = new Array(matrixBDimensionX);
          let matrixC = new Array(matrixADimensionX);
          for (let loop1 = 0; loop1 < matrixADimensionX; loop1++) {
            matrixACopy[loop1] = new Array(matrixADimensionY);
            let inputMatrixATableRow = document.createElement('tr');
            inputMatrixATableBody.appendChild(inputMatrixATableRow);
            for (let loop2 = 0; loop2 < matrixADimensionY; loop2++) {
              matrixACopy[loop1][loop2] = matrixA[loop1][loop2];
              let matrixAValue = Math.round(matrixACopy[loop1][loop2] * matrixAPrecision) / matrixAPrecision;
              let inputMatrixATableCell = document.createElement('td');
              inputMatrixATableCell.innerText = matrixAValue.toString().replace('.', ',');
              inputMatrixATableRow.appendChild(inputMatrixATableCell);
            }
          }
          for (let loop1 = 0; loop1 < matrixBDimensionX; loop1++) {
            matrixBCopy[loop1] = new Array(matrixBDimensionY);
            let inputMatrixBTableRow = document.createElement('tr');
            inputMatrixBTableBody.appendChild(inputMatrixBTableRow);
            for (let loop2 = 0; loop2 < matrixBDimensionY; loop2++) {
              matrixBCopy[loop1][loop2] = matrixB[loop1][loop2];
              let matrixBValue = Math.round(matrixBCopy[loop1][loop2] * matrixBPrecision) / matrixBPrecision;
              let inputMatrixBTableCell = document.createElement('td');
              inputMatrixBTableCell.innerText = matrixBValue.toString().replace('.', ',');
              inputMatrixBTableRow.appendChild(inputMatrixBTableCell);
            }
          }
          for (let loop1 = 0; loop1 < matrixADimensionX; loop1++) {
            matrixC[loop1] = new Array(matrixBDimensionY);
            let outputCalculationsTableRow = document.createElement('tr');
            outputCalculationsTableBody.appendChild(outputCalculationsTableRow);
            let outputMatrixCTableRow = document.createElement('tr');
            outputMatrixCTableBody.appendChild(outputMatrixCTableRow);
            for (let loop2 = 0; loop2 < matrixBDimensionY; loop2++) {
              stepNumber++;
              matrixC[loop1][loop2] = 0;
              let calculationsIngredientsString = new Array();
              let calculationsPreresultsString = new Array();
              let calculationsMatrixFieldString = '(';
              let calculationsString = '';
              for (let loop3 = 0; loop3 < matrixADimensionY; loop3++) {
                let calculationsPreresultsValue = matrixACopy[loop1][loop3] * matrixBCopy[loop3][loop2];
                matrixC[loop1][loop2] += calculationsPreresultsValue;
                if (calculationsIngredientsString.length > 0) {
                  if (matrixACopy[loop1][loop3] < 0 && matrixBCopy[loop3][loop2] < 0) {
                    calculationsIngredientsString.push('(' + (Math.round(matrixACopy[loop1][loop3] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',') + ') &times; (' +  (Math.round(matrixBCopy[loop3][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ',') + ')');
                  } else if (matrixACopy[loop1][loop3] > 0 && matrixBCopy[loop3][loop2] < 0) {
                    calculationsIngredientsString.push((Math.round(matrixACopy[loop1][loop3] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',') + ' &times; (' +  (Math.round(matrixBCopy[loop3][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ',') + ')');
                  } else if (matrixACopy[loop1][loop3] < 0 && matrixBCopy[loop3][loop2] > 0) {
                    calculationsIngredientsString.push('(' + (Math.round(matrixACopy[loop1][loop3] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',') + ') &times; ' +  (Math.round(matrixBCopy[loop3][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ','));
                  } else if (matrixACopy[loop1][loop3] > 0 && matrixBCopy[loop3][loop2] > 0) {
                    calculationsIngredientsString.push((Math.round(matrixACopy[loop1][loop3] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',') + ' &times; ' +  (Math.round(matrixBCopy[loop3][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ','));
                  }
                } else {
                  if (matrixBCopy[loop3][loop2] < 0) {
                    calculationsIngredientsString.push((Math.round(matrixACopy[loop1][loop3] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',') + ' &times; (' +  (Math.round(matrixBCopy[loop3][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ',') + ')');
                  } else if (matrixBCopy[loop3][loop2] > 0) {
                    calculationsIngredientsString.push((Math.round(matrixACopy[loop1][loop3] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',') + ' &times; ' +  (Math.round(matrixBCopy[loop3][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ','));
                  }
                }
                if (calculationsPreresultsValue < 0) {
                  calculationsPreresultsString.push('(' + ((Math.round(calculationsPreresultsValue * calculationsPrecision) / calculationsPrecision)).toString().replace('.', ',') + ')');
                } else {
                  calculationsPreresultsString.push((Math.round(calculationsPreresultsValue * calculationsPrecision) / calculationsPrecision).toString().replace('.', ','));
                }
                calculationsMatrixFieldString += ((loop3 != 0) ? ' + ' + ((matrixACopy[loop1][loop3] < 0) ? ('(' + (Math.round(matrixACopy[loop1][loop3] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',') + ')') : (Math.round(matrixACopy[loop1][loop3] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',')) + ' &times; ' + ((matrixBCopy[loop3][loop2] < 0) ? '(' + (Math.round(matrixBCopy[loop3][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ',') + ')' :  (Math.round(matrixBCopy[loop3][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ',')) : (Math.round(matrixACopy[loop1][loop3] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',') + ' &times; ' + ((matrixBCopy[loop3][loop2] < 0) ? '(' + (Math.round(matrixBCopy[loop3][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ',') + ')' :  (Math.round(matrixBCopy[loop3][loop2] * matrixBPrecision) / matrixBPrecision).toString().replace('.', ',')));

              }
              calculationsMatrixFieldString += ')';
              let matrixCValue = Math.round(matrixC[loop1][loop2] * calculationsPrecision) / calculationsPrecision;
              let outputCalculationsTableCell = document.createElement('td');
              outputCalculationsTableCell.innerHTML = calculationsMatrixFieldString;
              outputCalculationsTableRow.appendChild(outputCalculationsTableCell);
              let outputMatrixCTableCell = document.createElement('td');
              outputMatrixCTableCell.innerText = matrixCValue.toString().replace('.', ',');
              outputMatrixCTableRow.appendChild(outputMatrixCTableCell);
              let outputCalculationsTableRow2 = document.createElement('tr');
              calculationsTableBody.appendChild(outputCalculationsTableRow2);
              let coutputCalculationsTableTd1 = document.createElement('td');
              outputCalculationsTableRow2.appendChild(coutputCalculationsTableTd1);
              let coutputCalculationsTableTd2 = document.createElement('td');
              outputCalculationsTableRow2.appendChild(coutputCalculationsTableTd2);
              let stepTitleStrong = document.createElement('strong');
              stepTitleStrong.innerText = 'Krok ' + stepNumber + '.';
              coutputCalculationsTableTd1.appendChild(stepTitleStrong);
              let calculationsSpan = document.createElement('span');
              calculationsIngredientsString.forEach(function(item, index, array) {
                calculationsString += (index != 0) ? (' + ' + item) : item;
              });
              calculationsPreresultsString.forEach(function(item, index, array) {
                calculationsString += (index != 0) ? ((index != array.length - 1) ? (item + ' + ') : (item + ' = ')) : (' = ' + item + ' + ');
              });
              if (matrixC[loop1][loop2] < 0) {
                calculationsString += '(' + (Math.round(matrixC[loop1][loop2] * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',') + ')';
              } else {
                calculationsString += (Math.round(matrixC[loop1][loop2] * calculationsPrecision) / calculationsPrecision).toString().replace('.', ',');
              }
              calculationsSpan.innerHTML = calculationsString;
              coutputCalculationsTableTd2.appendChild(calculationsSpan);
            }
          }
          inputDataDiv.appendChild(inputMatrixAContainer);
          inputDataDiv.appendChild(inputMatrixBContainer);
          inputDataDiv.appendChild(outputCalculationsContainer);
          calculationsTableBody.parentElement.style.display = 'table';
          calculationsResultDiv.innerHTML = 'Wynik:<br />';
          calculationsResultDiv.appendChild(outputMatrixCContainer);
        } else if (page == 'bynumber') {
          let inputMatrixAContainer = document.createElement('div');
          let outputCalculationsContainer = document.createElement('div');
          let outputMatrixCContainer = document.createElement('div');
          inputMatrixAContainer.className = 'input-container';
          outputCalculationsContainer.className = 'output-container';
          outputMatrixCContainer.className = 'output-container';
          let matrixAVar = document.createElement('var');
          matrixAVar.innerText = 'A';
          inputMatrixAContainer.appendChild(matrixAVar);
          let matrixCVar = document.createElement('var');
          matrixCVar.innerText = 'C';
          outputCalculationsContainer.appendChild(matrixCVar);
          let matrixCVar2 = document.createElement('var');
          matrixCVar2.innerText = 'C';
          outputMatrixCContainer.appendChild(matrixCVar2);
          let matrixEqualChar = document.createElement('span');
          matrixEqualChar.innerText = ' = ';
          inputMatrixAContainer.appendChild(matrixEqualChar);
          let matrixEqualChar2 = document.createElement('span');
          matrixEqualChar2.innerText = ' = ';
          outputCalculationsContainer.appendChild(matrixEqualChar2);
          let matrixEqualChar3 = document.createElement('span');
          matrixEqualChar3.innerText = ' = ';
          outputMatrixCContainer.appendChild(matrixEqualChar3);
          let matrixAVar2 = document.createElement('var');
          matrixAVar2.innerText = 'A';
          outputCalculationsContainer.appendChild(matrixAVar2);
          let matrixTimesChar = document.createElement('span');
          matrixTimesChar.innerHTML = ' &times; ';
          outputCalculationsContainer.appendChild(matrixTimesChar);
          let numberBVar = document.createElement('var');
          numberBVar.innerText = 'b';
          outputCalculationsContainer.appendChild(numberBVar);
          let matrixEqualChar4 = document.createElement('span');
          matrixEqualChar4.innerText = ' = ';
          outputCalculationsContainer.appendChild(matrixEqualChar4);
          let inputMatrixAFieldsContainer = document.createElement('div');
          let outputMatrixCFieldsContainer = document.createElement('div');
          let outputCalculationsFieldsContainer = document.createElement('div');
          inputMatrixAContainer.appendChild(inputMatrixAFieldsContainer);
          outputMatrixCContainer.appendChild(outputMatrixCFieldsContainer);
          outputCalculationsContainer.appendChild(outputCalculationsFieldsContainer);
          let inputMatrixATable = document.createElement('table');
          let outputMatrixCTable = document.createElement('table');
          let outputCalculationsTable = document.createElement('table');
          inputMatrixAFieldsContainer.className = 'calc-matrix-fields-container';
          outputMatrixCFieldsContainer.className = 'calc-matrix-fields-container';
          outputCalculationsFieldsContainer.className = 'calc-matrix-fields-container';
          inputMatrixAFieldsContainer.appendChild(inputMatrixATable);
          outputMatrixCFieldsContainer.appendChild(outputMatrixCTable);
          outputCalculationsFieldsContainer.appendChild(outputCalculationsTable);
          let inputMatrixATableBody = document.createElement('tbody');
          let outputMatrixCTableBody = document.createElement('tbody');
          let outputCalculationsTableBody = document.createElement('tbody');
          inputMatrixATable.appendChild(inputMatrixATableBody);
          outputMatrixCTable.appendChild(outputMatrixCTableBody);
          outputCalculationsTable.appendChild(outputCalculationsTableBody);
          let matrixDimensionX = parseInt(matrixADimensionX);
          let matrixDimensionY = parseInt(matrixADimensionY);
          let matrixACopy = new Array(matrixDimensionX);
          let matrixC = new Array(matrixDimensionX);
          let calculationsMatrixFieldString = '';
          for (let loop1 = 0; loop1 < matrixDimensionX; loop1++) {
            matrixACopy[loop1] = new Array(matrixDimensionY);
            matrixC[loop1] = new Array(matrixDimensionY);
            let inputMatrixATableRow = document.createElement('tr');
            let outputCalculationsTableRow = document.createElement('tr');
            let outputMatrixCTableRow = document.createElement('tr');
            inputMatrixATableBody.appendChild(inputMatrixATableRow);
            outputCalculationsTableBody.appendChild(outputCalculationsTableRow);
            outputMatrixCTableBody.appendChild(outputMatrixCTableRow);
            for (let loop2 = 0; loop2 < matrixDimensionY; loop2++) {
              matrixACopy[loop1][loop2] = matrixA[loop1][loop2];
              matrixC[loop1][loop2] = matrixACopy[loop1][loop2] * numberB;
              calculationsMatrixFieldString = '(' + (Math.round(matrixACopy[loop1][loop2] * matrixAPrecision) / matrixAPrecision).toString().replace('.', ',') + ' &times ' + ((numberB < 0) ? '(' + (Math.round(numberB * numberBPrecision) / numberBPrecision).toString().replace('.', ',') + ')' :  (Math.round(numberB * numberBPrecision) / numberBPrecision).toString().replace('.', ',')) + ')';
              let matrixAValue = Math.round(matrixACopy[loop1][loop2] * matrixAPrecision) / matrixAPrecision;
              let matrixCValue = Math.round(matrixC[loop1][loop2] * calculationsPrecision) / calculationsPrecision;
              let inputMatrixATableCell = document.createElement('td');
              let outputCalculationsTableCell = document.createElement('td');
              let outputMatrixCTableCell = document.createElement('td');
              inputMatrixATableCell.innerText = matrixAValue.toString().replace('.', ',');
              outputCalculationsTableCell.innerHTML = calculationsMatrixFieldString;
              outputMatrixCTableCell.innerText = matrixCValue.toString().replace('.', ',');
              inputMatrixATableRow.appendChild(inputMatrixATableCell);
              outputCalculationsTableRow.appendChild(outputCalculationsTableCell);
              outputMatrixCTableRow.appendChild(outputMatrixCTableCell);
            }
          }
          inputDataDiv.appendChild(inputMatrixAContainer);
          inputDataDiv.appendChild(outputCalculationsContainer);
          calculationsTableBody.parentElement.style.display = 'none';
          calculationsResultDiv.innerHTML = 'Wynik:<br />';
          calculationsResultDiv.appendChild(outputMatrixCContainer);
        }
        clearCalculationsButton.removeAttribute('disabled');
      }, false);
    }

    if (!!clearCalculationsButton) {
      clearCalculationsButton.addEventListener('click', function() {
        clearCalculationsButton.setAttribute('disabled', 'disabled');
        calculationsIndentationStep = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        while (inputDataDiv.firstChild) {
          inputDataDiv.removeChild(inputDataDiv.firstChild);
        }
        while (calculationsTableBody.firstChild) {
        calculationsTableBody.removeChild(calculationsTableBody.firstChild);
        }
        calculationsResultDiv.innerText = '';
        makeCalculationsButton.removeAttribute('disabled');
      });
    }

    if (page == 'determinant' || page == 'bynumber') {
      resetMatrixA();
      rebuildMatrixA();
    } else if (page == 'addition' || page == 'subtraction' || page == 'multiplication') {
      resetMatrixA();
      rebuildMatrixA();
      resetMatrixB();
      rebuildMatrixB();
    }
  }
}
