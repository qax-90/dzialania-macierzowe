<?php
$offers = array(
	'determinant' => array('determinant', 'Wyznacznik macierzy', 'Oblicz wyznacznik macierzy', 'Oblicz wyznacznik dowolnej macierzy kwadratowej'),
	'addition' => array('addition', 'Dodawanie macierzy', 'Dodaj do siebie dwie macierze', 'Dodaj do siebie dwie dowolne macierze o&nbsp;odpowiednich wymiarach'),
	'subtraction' => array('subtraction', 'Odejmowanie macierzy', 'Odejmij od siebie dwie macierze', 'Odejmij od siebie dwie dowolne macierze o&nbsp;odpowiednich wymiarach'),
	'multiplication' => array('multiplication', 'Mnożenie macierzy', 'Pomnóż przez siebie dwie macierze', 'Pomnóż przez siebie dwie dowolne macierze o&nbsp;odpowiednich wymiarach'),
	'bynumber' => array('bynumber', 'Mnożenie przez liczbę', 'Pomnóż macierz przez liczbę', 'Pomnóż dowolną macierz o&nbsp;zadanych wymiarach przez dowolną liczbę'),
	'rank' => array('rank', 'Rząd macierzy', 'Wyznacz rząd macierzy', 'Wyznacz wymiar największej podmacierzy kwadratowej o&nbsp;niezerowym wyznaczniku'),
	'inverse' => array('inverse', 'Macierz odwrotna', 'Odwróć dowolną macierz kwadratową', 'Odwróć dowolną macierz kwadratową o&nbsp;niezerowym wyznaczniku')
);
$shuffled_offers = $offers;
shuffle($shuffled_offers);
echo '<!doctype html>
<html lang="pl">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="Responsywna aplikacja internetowa służąca do wykonywania różnych działań macierzowych." />
		<meta name="author" content="Wojciech Łasocha" />
		<title>';
		if (isset($_GET['page'])) {
			echo $offers[$_GET['page']][1];
		} else {
			echo 'Strona główna';
		}
		$root_prehref = '/dzialania-macierzowe'; // w razie konieczności: $root_prehref = '/dzialania-macierzowe';
		echo ' | Działania macierzowe</title>
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/main.min.css" />
		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/main.min.js"></script>
	</head>
	<body>
		<header>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container-fluid">
					<div class="navbar-brand text-primary">Działania macierzowe</div>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link';
								if (!isset($_GET['page'])) {
									echo ' active" aria-current="page';
								}
								echo '" href="'.$root_prehref.'/">Strona główna</a>
							</li>
							<li class="nav-item">
								<a class="nav-link';
								if (isset($_GET['page']) && $_GET['page'] == $offers['determinant'][0]) {
									echo ' active" aria-current="page';
								}
								echo '" href="'.$root_prehref.'/?page='.$offers['determinant'][0].'">'.$offers['determinant'][1].'</a>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Działania na macierzach
								</a>
								<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
									<li><a class="dropdown-item';
									if (isset($_GET['page']) && $_GET['page'] == $offers['addition'][0]) {
										echo ' active" aria-current="page';
									}
									echo '" href="'.$root_prehref.'/?page='.$offers['addition'][0].'">'.$offers['addition'][1].'</a></li>
									<li><a class="dropdown-item';
									if (isset($_GET['page']) && $_GET['page'] == $offers['subtraction'][0]) {
										echo ' active" aria-current="page';
									}
									echo '" href="'.$root_prehref.'/?page='.$offers['subtraction'][0].'">'.$offers['subtraction'][1].'</a></li>
									<li><hr class="dropdown-divider"></li>
									<li><a class="dropdown-item';
									if (isset($_GET['page']) && $_GET['page'] == $offers['multiplication'][0]) {
										echo ' active" aria-current="page';
									}
									echo '" href="'.$root_prehref.'/?page='.$offers['multiplication'][0].'">'.$offers['multiplication'][1].'</a></li>
									<li><a class="dropdown-item';
									if (isset($_GET['page']) && $_GET['page'] == $offers['bynumber'][0]) {
										echo ' active" aria-current="page';
									}
									echo '" href="'.$root_prehref.'/?page='.$offers['bynumber'][0].'">'.$offers['bynumber'][1].'</a></li>
								</ul>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled">'.$offers['rank'][1].'</a>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled">'.$offers['inverse'][1].'</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<main>
			<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="img/slide-1.webp" class="d-block w-100" alt="Ilustracja przestrzeni kosmicznej nr 1" />
						<div class="carousel-caption d-md-block">
							<h5>'.$shuffled_offers[0][1].'</h5>
							<p>'.$shuffled_offers[0][2].'</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src="img/slide-2.webp" class="d-block w-100" alt="Ilustracja przestrzeni kosmicznej nr 2">
						<div class="carousel-caption d-md-block">
							<h5>'.$shuffled_offers[3][1].'</h5>
							<p>'.$shuffled_offers[3][2].'</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src="img/slide-3.webp" class="d-block w-100" alt="Ilustracja przestrzeni kosmicznej nr 3">
						<div class="carousel-caption d-md-block">
							<h5>'.$shuffled_offers[6][1].'</h5>
							<p>'.$shuffled_offers[6][2].'</p>
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Poprzedni slajd</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Następny slajd</span>
				</button>
			</div>';
			if (isset($_GET['page']) && $_GET['page'] == $offers['determinant'][0]) {
				echo '<div class="container text-white text-center">
					<div class="row">
						<div class="col-lg-12">
							<h2 class="text-white page-title">'.$offers['determinant'][2].'</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4">
							<fieldset><legend class="h5">Rozmiar macierzy A</legend>
								<span class="matrix-span">Wybierz rozmiar macierzy:</span>
								<select name="matrix-a-dimensions" id="matrix-a-dimensions">
									<option value="1">1 x 1</option>
									<option value="2">2 x 2</option>
									<option value="3">3 x 3</option>
									<option value="4" selected>4 x 4</option>
									<option value="5">5 x 5</option>
									<option value="6">6 x 6</option>
									<option value="7">7 x 7</option>
									<option value="8">8 x 8</option>
									<option value="9">9 x 9</option>
									<option value="10">10 x 10</option>
								</select>
								<span class="matrix-span">Wykonaj akcję:</span>
								<button id="resize-matrix-a" class="btn btn-custom" type="button">Zmień rozmiar macierzy</button>
							</fieldset>
							<fieldset><legend class="h5">Losowanie macierzy A</legend>
								<span class="matrix-span">Wybierz zakres liczb:<br /></span>
								<div id="matrix-a-range-container">
									<span>Od </span><input name="matrix-a-range-from" id="matrix-a-range-from" type="number" min="-100" max="100" value="0" step="1" /><span> do </span><input name="matrix-a-range-to" id="matrix-a-range-to" type="number" min="-100" max="100" value="10" step="1" />
								</div>
								<span class="matrix-span">Wykonaj akcję:<br /></span>
								<button id="generate-random-matrix-a" class="btn btn-custom" type="button">Generuj losową macierz</button>
							</fieldset>
						</div>
						<div class="col-lg-4">
							<fieldset><legend class="h5">Macierz wejściowa A</legend>
								<span class="matrix-span">Macierz A:</span>
								<div id="matrix-a-fields-container" data-matrix-a-fields-size="0"></div>
							</fieldset>
						</div>
						<div class="col-lg-4">
							<fieldset><legend class="h5">Precyzja obliczeń</legend>
								<span class="matrix-span">Ilość miejsc po przecinku<br />w&nbsp;macierzy A:</span>
								<input name="matrix-a-precision" id="matrix-a-precision" type="number" min="0" max="3" value="0" />
								<span class="matrix-span">Ilość miejsc po przecinku<br />w&nbsp;obliczeniach wyjściowych:</span>
								<input name="calculations-precision" id="calculations-precision" type="number" min="0" max="8" value="3" />
							</fieldset>
							<fieldset><legend class="h5">Zerowanie macierzy</legend>
								<span class="matrix-span">Wykonaj akcję:<br /></span>
								<button id="reset-matrix-a" class="btn btn-custom" type="button">Wyzeruj macierz A</button>
							</fieldset>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<fieldset><legend class="h5">Obliczenia wyjściowe</legend>
								<span class="matrix-span">Wykonaj akcję:<br /></span>
								<button id="make-calculations" class="btn btn-custom" type="button">Wykonaj obliczenia</button><button id="clear-calculations" class="btn btn-custom" type="button" disabled="disabled">Wyczyść obliczenia</button>
								<div id="input-data"></div>
								<table><tbody id="calculations-table-body"></tbody></table>
								<div id="calculations-result"></div>
							</fieldset>
						</div>
					</div>
					<hr class="featurette-divider" />
				</div>';
			} elseif (isset($_GET['page']) && ($_GET['page'] == $offers['addition'][0] || $_GET['page'] == $offers['subtraction'][0])) {
				echo '<div class="container text-white text-center">
					<div class="row">
						<div class="col-lg-12">
							<h2 class="text-white page-title">';
							if ($_GET['page'] == $offers['addition'][0]) {
								echo $offers['addition'][2];
							} elseif ($_GET['page'] == $offers['subtraction'][0]) {
								echo $offers['subtraction'][2];
							}
						echo '</h2></div>
					</div>
					<div class="row">
						<div class="col-lg-4">
							<fieldset><legend class="h5">Rozmiar macierzy A i B</legend>
								<span class="matrix-span">Wybierz ilość wierszy:</span>
								<select name="matrix-a-b-rows" id="matrix-a-b-rows">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4" selected>4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<span class="matrix-span">Wybierz ilość kolumn:</span>
								<select name="matrix-a-b-cols" id="matrix-a-b-cols">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4" selected>4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<span class="matrix-span">Wykonaj akcję:</span>
								<button id="resize-matrix-a-b" class="btn btn-custom" type="button">Zmień rozmiar macierzy</button>
							</fieldset>
							<fieldset><legend class="h5">Losowanie macierzy A</legend>
								<span class="matrix-span">Wybierz zakres liczb:<br /></span>
								<div id="matrix-a-range-container">
									<span>Od </span><input name="matrix-a-range-from" id="matrix-a-range-from" type="number" min="-100" max="100" value="0" /><span> do </span><input name="matrix-a-range-to" id="matrix-a-range-to" type="number" min="-100" max="100" value="10" />
									<span class="matrix-span">Wykonaj akcję:<br /></span>
								</div>
								<button id="generate-random-matrix-a" class="btn btn-custom" type="button">Generuj losową macierz</button>
							</fieldset>
							<fieldset><legend class="h5">Losowanie macierzy B</legend>
								<span class="matrix-span">Wybierz zakres liczb:<br /></span>
								<div id="matrix-b-range-container">
									<span>Od </span><input name="matrix-b-range-from" id="matrix-b-range-from" type="number" min="-100" max="100" value="0" step="1" /><span> do </span><input name="matrix-b-range-to" id="matrix-b-range-to" type="number" min="-100" max="100" value="10" step="1" />
								</div>
								<span class="matrix-span">Wykonaj akcję:<br /></span>
								<button id="generate-random-matrix-b" class="btn btn-custom" type="button">Generuj losową macierz</button>
							</fieldset>
						</div>
						<div class="col-lg-4">
							<fieldset><legend class="h5">Macierz wejściowa A</legend>
								<span class="matrix-span">Macierz A:</span>
								<div id="matrix-a-fields-container" data-matrix-a-fields-size="0"></div>
							</fieldset>
							<fieldset><legend class="h5">Macierz wejściowa B</legend>
								<span class="matrix-span">Macierz B:</span>
								<div id="matrix-b-fields-container" data-matrix-b-fields-size="0"></div>
							</fieldset>
						</div>
						<div class="col-lg-4">
							<fieldset><legend class="h5">Precyzja obliczeń</legend>
								<span class="matrix-span">Ilość miejsc po przecinku<br />w&nbsp;macierzy A:</span>
								<input type="number" name="matrix-a-precision" id="matrix-a-precision" min="0" max="3" value="0" />
								<span class="matrix-span">Ilość miejsc po przecinku<br />w&nbsp;macierzy B:</span>
								<input type="number" name="matrix-b-precision" id="matrix-b-precision" min="0" max="3" value="0" />
								<span class="matrix-span">Ilość miejsc po przecinku<br />w&nbsp;obliczeniach wyjściowych:</span>
								<input type="number" name="calculations-precision" id="calculations-precision" min="0" max="8" value="3" />
							</fieldset>
							<fieldset><legend class="h5">Zerowanie macierzy</legend>
								<span class="matrix-span">Wykonaj akcję:</span>
								<button id="reset-matrix-a" class="btn btn-custom" type="button">Wyzeruj macierz A</button>
								<button id="reset-matrix-b" class="btn btn-custom" type="button">Wyzeruj macierz B</button>
							</fieldset>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<fieldset><legend class="h5">Obliczenia wyjściowe</legend>
								<span class="matrix-span">Wykonaj akcję:<br /></span>
								<button id="make-calculations" class="btn btn-custom" type="button">Wykonaj obliczenia</button><button id="clear-calculations" class="btn btn-custom" type="button" disabled="disabled">Wyczyść obliczenia</button>
								<div id="input-data"></div>
								<table><tbody id="calculations-table-body"></tbody></table>
								<div id="calculations-result"></div>
							</fieldset>
						</div>
					</div>
					<hr class="featurette-divider" />
				</div>';
			} elseif (isset($_GET['page']) && $_GET['page'] == $offers['multiplication'][0]) {
				echo '<div class="container text-white text-center">
					<div class="row">
						<div class="col-lg-12">
							<h2 class="text-white page-title">'.$offers['multiplication'][2].'</h2></div>
					</div>
					<div class="row">
						<div class="col-lg-4">
							<fieldset><legend class="h5">Rozmiar macierzy A i B</legend>
								<span class="matrix-span">Wybierz ilość kolumn macierzy A<br />i&nbsp;ilość wierszy macierzy B:</span>
								<select name="matrix-a-cols-b-rows" id="matrix-a-cols-b-rows">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4" selected>4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<span class="matrix-span">Wybierz ilość wierszy macierzy A:</span>
								<select name="matrix-a-rows" id="matrix-a-rows">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4" selected>4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<span class="matrix-span">Wybierz ilość kolumn macierzy B:</span>
								<select name="matrix-b-cols" id="matrix-b-cols">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4" selected>4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<span class="matrix-span">Wykonaj akcję:</span>
								<button id="resize-matrix-a-b" class="btn btn-custom" type="button">Zmień rozmiar macierzy</button>
							</fieldset>
							<fieldset><legend class="h5">Losowanie macierzy A</legend>
								<span class="matrix-span">Wybierz zakres liczb:<br /></span>
								<div id="matrix-a-range-container">
									<span>Od </span><input name="matrix-a-range-from" id="matrix-a-range-from" type="number" min="-100" max="100" value="0" /><span> do </span><input name="matrix-a-range-to" id="matrix-a-range-to" type="number" min="-100" max="100" value="10" />
								</div>
								<span class="matrix-span">Wykonaj akcję:<br /></span>
								<button id="generate-random-matrix-a" class="btn btn-custom" type="button">Generuj losową macierz</button>
							</fieldset>
							<fieldset><legend class="h5">Losowanie macierzy B</legend>
								<span class="matrix-span">Wybierz zakres liczb:<br /></span>
								<div id="matrix-b-range-container">
									<span>Od </span><input name="matrix-b-range-from" id="matrix-b-range-from" type="number" min="-100" max="100" value="0" /><span> do </span><input name="matrix-b-range-to" id="matrix-b-range-to" type="number" min="-100" max="100" value="10" />
								</div>
								<span class="matrix-span">Wykonaj akcję:<br /></span>
								<button id="generate-random-matrix-b" class="btn btn-custom" type="button">Generuj losową macierz</button>
							</fieldset>
						</div>
						<div class="col-lg-4">
							<fieldset><legend class="h5">Macierz wejściowa A</legend>
								<span class="matrix-span">Macierz A:</span>
								<div id="matrix-a-fields-container" data-matrix-a-fields-size="0"></div>
							</fieldset>
							<fieldset><legend class="h5">Macierz wejściowa B</legend>
								<span class="matrix-span">Macierz B:</span>
								<div id="matrix-b-fields-container" data-matrix-b-fields-size="0"></div>
							</fieldset>
						</div>
						<div class="col-lg-4">
							<fieldset><legend class="h5">Precyzja obliczeń</legend>
								<span class="matrix-span">Ilość miejsc po przecinku<br />w&nbsp;macierzy A:</span>
								<input type="number" name="matrix-a-precision" id="matrix-a-precision" min="0" max="3" value="0" />
								<span class="matrix-span">Ilość miejsc po przecinku<br />w&nbsp;macierzy B:</span>
								<input type="number" name="matrix-b-precision" id="matrix-b-precision" min="0" max="3" value="0" />
								<span class="matrix-span">Ilość miejsc po przecinku<br />w&nbsp;obliczeniach wyjściowych:</span>
								<input type="number" name="calculations-precision" id="calculations-precision" min="0" max="8" value="3" />
							</fieldset>
							<fieldset><legend class="h5">Zerowanie macierzy</legend>
								<span class="matrix-span">Wykonaj akcję:</span>
								<button id="reset-matrix-a" class="btn btn-custom" type="button">Wyzeruj macierz A</button>
								<button id="reset-matrix-b" class="btn btn-custom" type="button">Wyzeruj macierz B</button>
							</fieldset>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<fieldset><legend class="h5">Obliczenia wyjściowe</legend>
								<span class="matrix-span">Wykonaj akcję:<br /></span>
								<button id="make-calculations" class="btn btn-custom" type="button">Wykonaj obliczenia</button><button id="clear-calculations" class="btn btn-custom" type="button" disabled="disabled">Wyczyść obliczenia</button>
								<div id="input-data"></div>
								<table><tbody id="calculations-table-body"></tbody></table>
								<div id="calculations-result"></div>
							</fieldset>
						</div>
					</div>
					<hr class="featurette-divider" />
				</div>';
			} elseif (isset($_GET['page']) && $_GET['page'] == $offers['bynumber'][0]) {
				echo '<div class="container text-white text-center">
					<div class="row">
						<div class="col-lg-12">
							<h2 class="text-white page-title">'.$offers['bynumber'][2].'</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4">
							<fieldset><legend class="h5">Rozmiar macierzy A</legend>
								<span class="matrix-span">Wybierz ilość wierszy:</span>
								<select name="matrix-a-rows" id="matrix-a-rows">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4" selected>4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<span class="matrix-span">Wybierz ilość kolumn:</span>
								<select name="matrix-a-cols" id="matrix-a-cols">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4" selected>4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
								<span class="matrix-span">Wykonaj akcję:</span>
								<button id="resize-matrix-a" class="btn btn-custom" type="button">Zmień rozmiar macierzy</button>
							</fieldset>
							<fieldset><legend class="h5">Losowanie macierzy A</legend>
								<span class="matrix-span">Wybierz zakres liczb:<br /></span>
								<div id="matrix-a-range-container">
									<span>Od </span><input name="matrix-a-range-from" id="matrix-a-range-from" type="number" min="-100" max="100" value="0" /><span> do </span><input name="matrix-a-range-to" id="matrix-a-range-to" type="number" min="-100" max="100" value="10" />
								</div>
								<span class="matrix-span">Wykonaj akcję:<br /></span>
								<button id="generate-random-matrix-a" class="btn btn-custom" type="button">Generuj losową macierz</button>
							</fieldset>
						</div>
						<div class="col-lg-4">
							<fieldset><legend class="h5">Macierz wejściowa A</legend>
								<span class="matrix-span">Macierz A:</span>
								<div id="matrix-a-fields-container" data-matrix-a-fields-size="0"></div>
							</fieldset>
							<fieldset><legend class="h5">Liczba wejściowa b</legend>
								<span class="matrix-span">Liczba b:</span>
								<input type="number" name="number-b" id="number-b" min="-1000000000" max="1000000000" step="0.001" value="0" />
							</fieldset>
						</div>
						<div class="col-lg-4">
							<fieldset><legend class="h5">Precyzja obliczeń</legend>
								<span class="matrix-span">Ilość miejsc po przecinku<br />w&nbsp;macierzy A:</span>
								<input type="number" name="matrix-a-precision" id="matrix-a-precision" min="0" max="3" value="0" />
								<span class="matrix-span">Ilość miejsc po przecinku<br />w&nbsp;liczbie b:</span>
								<input type="number" name="number-b-precision" id="number-b-precision" min="0" max="8" value="3" />
								<span class="matrix-span">Ilość miejsc po przecinku<br />w&nbsp;obliczeniach wyjściowych:</span>
								<input type="number" name="calculations-precision" id="calculations-precision" min="0" max="8" value="3" />
							</fieldset>
							<fieldset><legend class="h5">Zerowanie macierzy</legend>
								<span class="matrix-span">Wykonaj akcję:<br /></span>
								<button id="reset-matrix-a" class="btn btn-custom" type="button">Wyzeruj macierz A</button>
							</fieldset>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<fieldset><legend class="h5">Obliczenia wyjściowe</legend>
								<span class="matrix-span">Wykonaj akcję:<br /></span>
								<button id="make-calculations" class="btn btn-custom" type="button">Wykonaj obliczenia</button><button id="clear-calculations" class="btn btn-custom" type="button" disabled="disabled">Wyczyść obliczenia</button>
								<div id="input-data"></div>
								<table><tbody id="calculations-table-body"></tbody></table>
								<div id="calculations-result"></div>
							</fieldset>
						</div>
					</div>
					<hr class="featurette-divider" />
				</div>';
			} else {
				echo '<div class="container text-center text-white three-circles">
					<div class="row">
						<div class="col-lg-4">
							<img src="img/circle-1.webp" class="border border-light rounded-circle" width="140" height="140" />
							<h2>'.$shuffled_offers[0][1].'</h2>
							<p>'.$shuffled_offers[0][3].'</p>
							<p><a class="btn btn-secondary" href="'.$root_prehref.'/?page='.$shuffled_offers[0][0].'">Oblicz &raquo;</a></p>
						</div>
						<div class="col-lg-4">
							<img src="img/circle-2.webp" class="border border-light rounded-circle" width="140" height="140" />
							<h2>'.$shuffled_offers[3][1].'</h2>
							<p>'.$shuffled_offers[3][3].'</p>
							<p><a class="btn btn-secondary" href="'.$root_prehref.'/?page='.$shuffled_offers[3][0].'">Oblicz &raquo;</a></p>
						</div>
						<div class="col-lg-4">
							<img src="img/circle-3.webp" class="border border-light rounded-circle" width="140" height="140" />
							<h2>'.$shuffled_offers[6][1].'</h2>
							<p>'.$shuffled_offers[6][3].'</p>
							<p><a class="btn btn-secondary" href="'.$root_prehref.'/?page='.$shuffled_offers[6][0].'">Oblicz &raquo;</a></p>
						</div>
					</div>
					<hr class="featurette-divider" />
					<div class="row featurette">
						<div class="col-md-7 order-md-2">
							<h2 class="featurette-heading">Przewodniki jak wykonywać działania macierzowe</h2>
							<p class="lead text-white-50">Chciałbyś dokładnie zrozumieć jak krok po kroku wykonywać samodzielnie zadane działanie macierzowe? Poniżej podaję linki do wartościowych poradników na ten temat:</p>
							<p class="text-white-50">1. <a href="https://www.matmana6.pl/dzialania-na-macierzach" class="text-white-50">MatmaNa6 - Działania na macierzach</a><br />
							2. <a href="https://www.matemaks.pl/macierze.html" class="text-white-50">Matemaks.pl - Macierze</a></p>
						</div>
						<div class="col-md-5 order-md-1">
							<img src="img/square-'.rand(1, 3).'.webp" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
						</div>
					</div>
					<hr class="featurette-divider" />
				</div>';
			}
			echo '<footer class="container">
				<p class="float-end"><a href="#" <a class="btn btn-secondary" href="#">Przewiń do góry</a></p>
				<p class="text-white">Copyright &copy; 2021 by<br /><a href="http://www.wlasocha.pl/" class="text-white-50">Wojciech &bdquo;qax&rdquo; Łasocha</a></p>
			</footer>
		</main>
	</body>
</html>';
