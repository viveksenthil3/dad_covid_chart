from django.urls import path

from charts.views import totalCaseChart, home, totalDeathsChart, totalRecoveredChart, newCasesChart

urlpatterns = [
    path('', home),
    path('totalCaseChart/', totalCaseChart),
    path('totalDeathsChart/', totalDeathsChart),
    path('totalRecoveredChart/', totalRecoveredChart),
    path('newCasesChart/', newCasesChart),
]