'''
ARCHES - a program developed to inventory and manage immovable cultural heritage.
Copyright (C) 2013 J. Paul Getty Trust and World Monuments Fund

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
'''

from arches import urls as arches_urls
from django.conf.urls import patterns, url, include

uuid_regex = '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}'

urlpatterns = patterns('',
    url(r'^search$', '{{cookiecutter.app_name}}.views.search.home_page', name="search_home"),
    url(r'^search/resources$', '{{cookiecutter.app_name}}.views.search.search_results', name="search_results"),
    url(r'^search/export$', '{{cookiecutter.app_name}}.views.search.export_results', name="search_results_export"),
    url(r'^reports/(?P<resourceid>%s)$' % uuid_regex , '{{cookiecutter.app_name}}.views.resources.report', name='report'),
    url('^', include('django.contrib.auth.urls')),
    url(r'^search/overlaps', '{{cookiecutter.app_name}}.views.search.find_overlapping', name="find_overlapping_data"),
    url(r'', include(arches_urls)),
)

